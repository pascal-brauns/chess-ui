import { takeLatest, put, call, take, all, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { push } from 'connected-react-router';
import * as Action from 'Store/Action';
import { State } from 'Store/Reducer';
import * as API from 'API';
import * as Type from 'Type';

type Color = Type.Chess.Color;
type User = Type.Backend.User;
type Game = Type.Backend.Match;

const game = (id: string) => eventChannel(emitter => {
  API.IO.on(`${id}:game`, emitter);
  return () => null;
});

function* subscribeGame(action: ReturnType<typeof Action.subscribeGame>) {
  const id = action.payload;
  const channel = yield call(game, id);

  try {
    const game = yield call(API.Game.get, id);
    yield put(Action.receiveGame(game));
  }
  catch(error) {

  }
  
  yield put(push(`/game/multiplayer/remote/${id}`));

  while (true) {
    const game: API.Type.Match = yield take(channel);
    yield all([
      put(push(`/game/multiplayer/remote/${id}`)),
      put(Action.receiveGame(game))
    ]);
  }
}

function* act(action: ReturnType<typeof Action.act>) {
  const placement = action.payload;
  const user: API.Type.User = yield select((state: State) => state.User.identity);
  const game: API.Type.Match = yield select((state: State) => state.Game.match);

  yield call(API.Game.dispatch, game._id, user, placement);
}

function* getGameColor(action: ReturnType<typeof Action.getGameColor>) {
  const id = action.payload;
  const user: User = yield select((state: State) => state.User.identity);
  const color: Color = yield call(API.Game.getColor, id, user);
  yield put(Action.succeededToGetGameColor(color));
}

function* reviveGame(action: ReturnType<typeof Action.reviveGame>) {
  const id = action.payload;
  const game: Game = yield call(API.Game.get, id);
  yield put(Action.getGameColor(id));
  yield put(Action.succeededToReviveGame(game))
  yield put(Action.subscribeGame(id));
}

function* root() {
  yield takeLatest(Action.act.type, act);
  yield takeLatest(Action.subscribeGame.type, subscribeGame);
  yield takeLatest(Action.getGameColor.type, getGameColor);
  yield takeLatest(Action.reviveGame.type, reviveGame);
}

export default root;
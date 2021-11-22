import { takeLatest, select, call, all, put} from 'redux-saga/effects';
import * as Action from 'Store/Action';
import { RouterState } from 'connected-react-router';
import { State } from 'Store/Reducer';
import * as API from 'API';
import * as Type from 'Type';

type Payload = Type.Initialization.Payload;

function* initialize() {
  const router: RouterState = yield select((state: State) => state.router);
  try {
    const payload: Payload = yield call(API.Initialization.run, router);
    switch (payload?.type) {
      case '/lobby/join/:id': {
        yield all([
          put(Action.succeededToReviveUser(payload.user)),
          put(Action.receiveLobby(payload.lobby)),
          put(Action.subscribeLobby(payload.lobby._id)),
          put(Action.joinLobby(payload.lobby._id)),
          put(Action.succeededToInitialize())
        ]);
        break;
      }
      case '/lobby/room/:id': {
        yield all([
          put(Action.succeededToReviveUser(payload.user)),
          put(Action.receiveLobby(payload.lobby)),
          put(Action.succeededToGetLobbyColor(payload.color)),
          put(Action.subscribeLobby(payload.lobby._id)),
          put(Action.succeededToInitialize())
        ]);
        break;
      }
      case '/game/multiplayer/remote/:id': {
        yield all([
          put(Action.succeededToReviveUser(payload.user)),
          put(Action.receiveGame(payload.game)),
          put(Action.succeededToGetGameColor(payload.color)),
          put(Action.subscribeGame(payload.game._id)),
          put(Action.succeededToInitialize())
        ]);
        break;
      }
      case '/start':
      case '/lobby/overview':
      default: {
        yield all([
          put(Action.succeededToReviveUser(payload.user)),
          put(Action.succeededToInitialize())
        ]);
        break;
      }
    }
  }
  catch(error) {
    console.log(error);
    yield put(Action.failedToInitialize());
  }
}

function* root() {
  yield takeLatest(Action.initialize.type, initialize);
}

export default root;
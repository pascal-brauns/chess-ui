import { takeLatest, put, call, all, take, select, delay } from 'redux-saga/effects';
import { EventChannel, eventChannel } from 'redux-saga';
import { push, LocationChangeAction, createMatchSelector, RouterState, LOCATION_CHANGE
 } from 'connected-react-router';
import * as Action from 'Store/Action';
import { State } from 'Store/Reducer';
import * as Type from 'Type';
import * as API from 'API';

type Color = Type.Chess.Color;
type Lobby = Type.Lobby;
type User = Type.User;

const room = (id: string) => eventChannel(emitter => {
  API.IO.on(`${id}:lobby`, emitter);
  return () => null;
});

const rooms = () => eventChannel(emitter => {
  API.IO.on('lobbies', emitter);
  return () => null;
});

function* joinOnLocationChanges() {
  const router: RouterState = yield select((state: State) => state.router);
  const match = createMatchSelector('/lobby/join/:id');
  const route = match({ router });
  if (route) {
    const { id } = (route.params as { id: string });
    yield put(Action.joinLobby(id));
  }
}

function* getLobbies() {
  const lobbies = (yield call(API.Lobby.all)) as Lobby[];
  const channel = (yield call(rooms)) as EventChannel<Lobby[]>;
  yield put(Action.receiveLobbies(lobbies));
  while (true) {
    const lobbies: Lobby[] = yield take(channel);
    yield all([
      put(Action.receiveLobbies(lobbies))
    ]);
  }
}

function* createLobby(action: ReturnType<typeof Action.createLobby>) {
  const user = action.payload;
  const lobby = (yield call(API.Lobby.create, user)) as Lobby;

  yield put(Action.joinLobby(lobby._id));
  
  yield all([
    put(Action.succeededToCreateLobby(lobby)),
    put(push(`/lobby/room/${lobby._id}`)),
    put(Action.getLobbyColor()),
  ]);
}

function* selectColor(action: ReturnType<typeof Action.selectColor>) {
  const color = action.payload;
  const user: User = yield select((state: State) => state.User.identity);
  const lobby: Lobby = yield select((state: State) => state.Lobby.room);
  yield call(API.Lobby.selectColor, lobby._id, user, color);
}

function* toggleReady() {
  const user: User = yield select((state: State) => state.User.identity);
  const lobby: Lobby = yield select((state: State) => state.Lobby.room);
  yield call(API.Lobby.toggleReady, lobby._id, user);
}

function* leaveLobby() {
  const user: User = yield select((state: State) => state.User.identity);
  const lobby: Lobby = yield select((state: State) => state.Lobby.room);
  yield all([
    call(API.Lobby.leave, lobby._id, user),
    put(push(`/lobby/overview`))
  ]);
}

function* getLobbyColor() {
  const user: User = yield select((state: State) => state.User.identity);
  const lobby: Lobby = yield select((state: State) => state.Lobby.room);
  const color: Color = yield call(API.Lobby.getColor, lobby._id, user);
  yield put(Action.succeededToGetLobbyColor(color));
}

function* getLobby(action: ReturnType<typeof Action.getLobby>) {
  const id = action.payload;
  const lobby = (yield call(API.Lobby.get, id)) as Lobby;
  yield put(Action.receiveLobby(lobby));
}

function* joinLobby(action: ReturnType<typeof Action.joinLobby>) {
  const id = action.payload;
  const user: User = yield select((state: State) => state.User.identity);
  yield call(API.Lobby.join, id, user);
  yield all([
    put(push(`/lobby/room/${id}`)),
    put(Action.subscribeLobby(id)),
    put(Action.getLobby(id))
  ]);
}

const complete = (lobby: Lobby) => (
  lobby.members.length === 2 &&
  lobby.members.every(member => member.ready)
);

function* subscribeLobby(action: ReturnType<typeof Action.subscribeLobby>) {
  const id = action.payload;
  const channel = (yield call(room, id)) as EventChannel<Lobby>;
  while (true) {
    const lobby = (yield take(channel)) as Lobby;
    if (complete(lobby)) {
      yield put(Action.subscribeGame(lobby._id));
      yield delay(200);
      yield all([
        put(Action.getGame(lobby._id)),
        put(Action.getGameColor(lobby._id))
      ]);
      break;
    }
    else {
      yield all([
        put(Action.receiveLobby(lobby)),
        put(Action.getLobbyColor())
      ]);
    }
  }
}

function* root() {
  yield takeLatest(Action.createLobby.type, createLobby);
  yield takeLatest(Action.selectColor.type, selectColor);
  yield takeLatest(Action.toggleReady.type, toggleReady);
  yield takeLatest(Action.leaveLobby.type, leaveLobby);
  yield takeLatest(Action.getLobbyColor.type, getLobbyColor);
  yield takeLatest(Action.joinLobby.type, joinLobby);
  yield takeLatest(Action.getLobbies.type, getLobbies);
  yield takeLatest(Action.subscribeLobby.type, subscribeLobby);
  yield takeLatest(Action.getLobby.type, getLobby);
  yield takeLatest(LOCATION_CHANGE, joinOnLocationChanges);
}

export default root;
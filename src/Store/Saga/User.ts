import { takeLatest, put, call, select } from 'redux-saga/effects';
import * as Action from 'Store/Action';
import * as API from 'API';
import * as Type from 'Type';
import { State } from 'Store/Reducer';

type User = Type.Backend.User;

function* createUser(action: ReturnType<typeof Action.createUser>) {
  const nickname = action.payload;
  const user: API.Type.User = yield call(API.User.create, nickname);
  localStorage.setItem('user-id', user._id);
  yield put(Action.succeededToCreateUser(user));
}

function* getUser(action: ReturnType<typeof Action.getUser>) {
  const id = action.payload;
  const user: User = yield call(API.User.get, id);
  yield put(Action.succeededToGetUser(user));
}

function* updateUser(action: ReturnType<typeof Action.updateUser>) {
  const user = action.payload;
  yield call(API.User.set, user._id, user);
  yield put(Action.getUser(user._id));
}

function* root() {
  yield takeLatest(Action.createUser.type, createUser);
  yield takeLatest(Action.updateUser.type, updateUser);
  yield takeLatest(Action.getUser.type, getUser);
}

export default root;
import { takeLatest, put, call } from 'redux-saga/effects';
import * as Action from 'Store/Action';
import * as API from 'API';

function* createUser(action: ReturnType<typeof Action.createUser>) {
  const nickname = action.payload;
  const user: API.Type.User = yield call(API.User.create, nickname);
  localStorage.setItem('user-id', user._id);
  yield put(Action.succeededToCreateUser(user));
}

function* reviveUser() {
  const id = localStorage.getItem('user-id');
  try {
    const user: API.Type.User = yield call(API.User.get, id);
    yield put(Action.succeededToReviveUser(user));
  }
  catch (error) {
    yield put(Action.failedToReviveUser());
  }
}

function* root() {
  yield takeLatest(Action.createUser.type, createUser);
  yield takeLatest(Action.reviveUser.type, reviveUser)
}

export default root;
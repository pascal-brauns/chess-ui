import { all } from 'redux-saga/effects';
import User from './User';
import Lobby from './Lobby';
import Game from './Game';

function* root() {
  yield all([
    User(),
    Lobby(),
    Game()
  ]);
}

export default root;
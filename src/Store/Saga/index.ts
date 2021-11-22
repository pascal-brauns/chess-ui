import { all } from 'redux-saga/effects';
import User from './User';
import Lobby from './Lobby';
import Game from './Game';
import Initialization from './Initialization';

function* root() {
  yield all([
    User(),
    Lobby(),
    Game(),
    Initialization()
  ]);
}

export default root;
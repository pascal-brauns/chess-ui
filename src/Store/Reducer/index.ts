import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import history from 'Store/History';
import Lobby, { State as LobbyState } from './Lobby';
import User, { State as UserState } from './User';
import Game, { State as GameState } from './Game';

export type State = {
  router: RouterState;
  Lobby: LobbyState;
  User: UserState;
  Game: GameState;
};

export default combineReducers<State>({
  router: connectRouter(history),
  Lobby,
  User,
  Game
});
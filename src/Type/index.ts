export * as Assistant from './Assistant';
export { Type as Chess } from 'chess-processor';
export * as Board from './Board';
export * as Singleplayer from './Singleplayer';
export * as Multiplayer from './Multiplayer';
export * as Initialization from './Initialization';

import * as Singleplayer from './Singleplayer';
import * as Multiplayer from './Multiplayer';
import { Type as Chess } from 'chess-processor';

export type Settings = (
  Singleplayer.Settings |
  Multiplayer.Local.Settings |
  Multiplayer.Remote.Settings
);

export type User = {
  _id: string;
  nickname: string;
};

export type Member = {
  nickname: string;
  color: Chess.Color;
  ready: boolean;
};

export type Lobby = {
  _id: string;
  name: string;
  members: Member[];
};

export type Player = {
  nickname: string;
  color: Chess.Color;
};

export type Match = {
  _id: string;
  players: Player[];
  state: Chess.State;
};
import * as Type from 'Type';
export { Type as Chess } from 'chess-processor';

export type User = {
  _id: string;
  nickname: string;
};

export type Member = {
  nickname: string;
  color: Type.Chess.Color;
  ready: boolean;
};

export type Lobby = {
  _id: string;
  name: string;
  members: Member[];
};

export type Player = {
  nickname: string;
  color: Type.Chess.Color;
};

export type Match = {
  _id: string;
  players: Player[];
  state: Type.Chess.State;
};
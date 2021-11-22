import * as Type from 'API/Type';

type Default = {
  type: 'default';
  user: Type.User;
}

type Start = {
  type: '/start';
  user: Type.User;
};

type Overview = {
  type: '/lobby/overview';
  user: Type.User;
};

type Join = {
  type: '/lobby/join/:id';
  user: Type.User;
  lobby: Type.Lobby;
}

type Lobby = {
  type: '/lobby/room/:id';
  user: Type.User;
  lobby: Type.Lobby;
  color: Type.Chess.Color;
};

type Game = {
  type: '/game/multiplayer/remote/:id';
  user: Type.User;
  game: Type.Match;
  color: Type.Chess.Color;
};

export type Payload = Default | Start | Overview | Join | Lobby | Game;
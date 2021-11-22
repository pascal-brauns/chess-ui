import * as Type from 'Type';
import { createMatchSelector, RouterState } from 'connected-react-router';
import * as User from './User';
import * as Lobby from './Lobby';
import * as Game from './Game';

export const routes = [
  createMatchSelector('/start'),
  createMatchSelector('/lobby/overview'),
  createMatchSelector('/lobby/join/:id'),
  createMatchSelector('/lobby/room/:id'),
  createMatchSelector('/game/multiplayer/remote/:id'),
];

export const match = (router: RouterState) => (
  routes
    .find(match => match({ router }))
    ?.({ router })
);

type Params = {
  id: string;
};

type Payload = Type.Initialization.Payload;

export const run = async (router: RouterState): Promise<Payload> => {
  const route = match(router);
  const user = await User.get(localStorage.getItem('user-id'));
  switch (route?.path) {
    case '/lobby/join/:id': {
      const { id } = route.params as Params;
      const lobby = await Lobby.get(id);
      return {
        type: route.path,
        user,
        lobby
      };
    }
    case '/lobby/room/:id': {
      const { id } = route.params as Params;
      const lobby = await Lobby.get(id);
      const color = await Lobby.getColor(id, user);
      return {
        type: route.path,
        user,
        lobby,
        color
      };
    }
    case '/game/multiplayer/remote/:id': {
      const { id } = route.params as Params;
      const game = await Game.get(id);
      const color = await Game.getColor(id, user);
      return {
        type: route.path,
        user,
        game,
        color
      };
    }
    case '/start':
    case '/lobby/overview': return { type: route.path || null, user };
    default: return { type: 'default', user }
  }
}
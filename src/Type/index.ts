export * as Assistant from './Assistant';
export { Type as Chess } from 'chess-processor';
export * as Backend from 'API/Type';
export * as Board from './Board';
export * as Singleplayer from './Singleplayer';
export * as Multiplayer from './Multiplayer';

import * as Singleplayer from './Singleplayer';
import * as Multiplayer from './Multiplayer';

export type Settings = (
  Singleplayer.Settings |
  Multiplayer.Local.Settings |
  Multiplayer.Remote.Settings
);
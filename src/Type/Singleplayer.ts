import * as Board from './Board';

export type Difficulty = 0 | 1 | 2 | 3 | 4 | 5;

export type Settings = Board.Settings & {
  type: 'singleplayer';
  difficulty: Difficulty;
};
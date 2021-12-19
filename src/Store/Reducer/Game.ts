import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'Store/Action';
import * as Type from 'Type';

type Game = Type.Match;
type Color = Type.Chess.Color;

export type State = {
  match: Game;
  color: Color;
};

const initial: State = {
  match: null,
  color: null
};

const Game = createReducer(initial, builder => (
  builder
    .addCase(Action.receiveGame, (state, action) => {
      state.match = action.payload;
    })
    .addCase(Action.succeededToGetGameColor, (state, action) => {
      state.color = action.payload;
    })
));

export default Game;
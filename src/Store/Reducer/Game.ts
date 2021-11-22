import { createReducer } from '@reduxjs/toolkit';
import * as API from 'API';
import * as Action from 'Store/Action';

export type State = {
  match: API.Type.Match;
  color: API.Type.Chess.Color;
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
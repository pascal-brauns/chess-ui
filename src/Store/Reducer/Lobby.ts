import { createReducer } from '@reduxjs/toolkit';
import * as API from 'API';
import * as Action from 'Store/Action';
import * as Type from 'Type';

type Lobby = Type.Lobby;
type Color = Type.Chess.Color;

export type State = {
  rooms: Lobby[];
  room: Lobby;
  color: Color;
};

const initial: State = {
  rooms: [],
  room: null,
  color: null
};

const Lobby = createReducer(initial, builder => (
  builder
    .addCase(Action.receiveLobbies, (state, action) => {
      state.rooms = action.payload;
    })
    .addCase(Action.succeededToCreateLobby, (state, action) => {
      state.room = action.payload;
    })
    .addCase(Action.receiveLobby, (state, action) => {
      state.room = action.payload;
    })
    .addCase(Action.succeededToGetLobbyColor, (state, action) => {
      state.color = action.payload;
    })
));

export default Lobby;
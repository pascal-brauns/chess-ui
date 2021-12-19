import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'Store/Action';
import * as Type from 'Type';

export type State = {
  identity: Type.User;
};

const initial: State = {
  identity: null
}

const User = createReducer(initial, builder => (
  builder
    .addCase(Action.succeededToCreateUser, (state, action) => {
      const user = action.payload;
      state.identity = user;
    })
    .addCase(Action.succeededToGetUser, (state, action) => {
      const user = action.payload;
      state.identity = user;
    })
));

export default User;
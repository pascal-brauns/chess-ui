import { createReducer } from '@reduxjs/toolkit';
import * as API from 'API';
import * as Action from 'Store/Action';

export type State = {
  identity: API.Type.User;
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
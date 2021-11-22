import { createReducer } from '@reduxjs/toolkit';
import * as Action from 'Store/Action';

export type State = {
  initialized: boolean;
};

export const initial: State = {
  initialized: false,
};

const App = createReducer(initial, builder => (
  builder
    .addCase(Action.succeededToInitialize, (state) => {
      state.initialized = true;
    })
));

export default App;
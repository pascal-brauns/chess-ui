import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CssBaseline } from '@material-ui/core';
import Head from './Head';
import Theme from './Theme';
import store from 'Store';
import history from 'Store/History';

const style: React.CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const App: React.FC = ({ children }) => (
  <Provider store={store}>
    <Theme>
      <Head/>
      <CssBaseline/>
      <div style={style}>
        <ConnectedRouter history={history}>
          {children}
        </ConnectedRouter>
      </div>
    </Theme>
  </Provider>
);

export default App;
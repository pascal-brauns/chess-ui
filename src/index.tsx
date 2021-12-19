import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import App from 'Component/App';
import { Start, Lobby, Singleplayer, Multiplayer } from 'Component/Route';

ReactDOM.render(
  <App>
    <Route exact path='/start'>
      <Start/>
    </Route>
    <Route exact path='/lobby/overview'>
      <Lobby.Overview/>
    </Route>
    <Route exact path='/lobby/room/:id'>
      <Lobby.Room/>
    </Route>
    <Route exact path='/game/singleplayer'>
      <Singleplayer/>
    </Route>
    <Route exact path='/game/multiplayer/local'>
      <Multiplayer.Local/>
    </Route>
    <Route exact path='/game/multiplayer/remote/:id'>
      <Multiplayer.Remote/>
    </Route>
    <Route exact path='/' render={() => <Redirect to='/start'/>}/>
  </App>,
  document.getElementById('root')
);
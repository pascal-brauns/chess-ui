import React from 'react';
import { Card, CardHeader, IconButton, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';
import { useHistory } from 'react-router';
import * as Action from 'Store/Action';
import { useDispatch } from 'react-redux';
import useSelector from 'Store/useSelector';

const Overview: React.FC = () => {
  const history = useHistory();
  const lobbies = useSelector(state => state.Lobby.rooms);
  const user = useSelector(state => state.User.identity);
  const dispatch = useDispatch();

  React.useEffect(
    () => {
      dispatch(Action.getLobbies());
    },
    []
  );

  return (
    <Card>
      <span style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        paddingRight: 16
      }}>
        <CardHeader title='Lobbies'/>
        <span style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <IconButton
            size='small'
            onClick={() => dispatch(Action.createLobby(user))}>
            <Add/>
          </IconButton>
          <div style={{ width: 8 }}/>
          <IconButton
            size='small'
            onClick={() => history.push('/start')}>
            <Close/>
          </IconButton>
        </span>
      </span>
      <Divider/>
      {Boolean(lobbies.length) && (
        <List style={{
          width: 400,
          height: '60vh',
          overflowY: 'scroll',
          paddingTop: 0
        }}>
          {lobbies.map(({ _id, name }) => (
            <ListItem
              button
              divider
              onClick={() => dispatch(Action.joinLobby(_id))}
              key={name}>
              <ListItemText
                primary={name}/>
            </ListItem>
          ))}
        </List>
      )}
      {!lobbies.length && (
        <div
          style={{
            width: 400,
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            paddingBottom: 72
          }}>
          <Typography variant='h5' style={{ fontStyle: 'italic', color: 'grey' }}>
            No lobbies
          </Typography>
        </div>
      )}
    </Card>
  );
}

export default Overview;
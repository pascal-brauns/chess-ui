import React from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Option from './Option';
import { State } from 'Store/Reducer';
import * as API from 'API';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from 'Store/Action';
import * as Dialog from './Dialog';

const Start: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector<State, API.Type.User>(state => state.User.identity);

  const [nickname, setNickname] = React.useState('');

  React.useEffect(
    () => {
      if (!user) {
        dispatch(Action.reviveUser());
      }
    },
    [JSON.stringify(user)]
  );

  if (!user) {
    return (
      <Dialog.Nickname
        value={nickname}
        onChange={setNickname}
        onConfirm={() => dispatch(Action.createUser(nickname))}/>
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '72vh',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      paddingBottom: '32vh'
    }}>
      <Typography
        variant='h1'
        align='center'
        style={{ fontWeight: 'bold' }}>
        Chess
      </Typography>
      <Tooltip
        title='Coming soon!'
        arrow
        placement='right'
        open>
        <Option disabled onClick={() => history.push('/game/singleplayer')}>
          Singleplayer
        </Option>
      </Tooltip>
      <Option onClick={() => history.push('/game/multiplayer/local')}>
        Multiplayer
      </Option>
      <Option onClick={() => history.push('/lobby/overview')}>
        Online-Multiplayer
      </Option>
    </div>
  );
}

export default Start;
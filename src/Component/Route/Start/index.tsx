import React from 'react';
import { Tooltip, Typography, Fab } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Option from './Option';
import { State } from 'Store/Reducer';
import * as Type from 'Type';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from 'Store/Action';
import * as Dialog from './Dialog';
import { AccountCircle } from '@material-ui/icons';

type User = Type.User;

const Start: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector<State, User>(state => state.User.identity);

  const [nickname, setNickname] = React.useState('');
  const [open, setOpen] = React.useState({
    nickname: false
  });

  React.useEffect(
    () => {
      if (user?.nickname) {
        setNickname(user.nickname);
      }
    },
    [user?.nickname]
  );

  console.log(open);

  return (
    <>
      <Dialog.Nickname
        open={open.nickname}
        value={nickname}
        onChange={setNickname}
        onConfirm={() => {
          setOpen({ ...open, nickname: false });
          if (user) {
            dispatch(Action.updateUser({
              ...user,
              nickname
            }));
          }
          else {
            dispatch(Action.createUser(nickname));
          }
        }}/>
      <Tooltip
        open
        arrow
        placement='left'
        title={user?.nickname || 'Set your nickname'}>
        <Fab
          onClick={() => setOpen({ ...open, nickname: true })}
          style={{
            position: 'absolute',
            right: 16,
            top: 16
          }}>
          <AccountCircle/>
        </Fab>
      </Tooltip>
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
        <Tooltip
          open={!user}
          title='You need to set a nickname for this feature'
          placement='right'>
          <Option
            disabled={!user}
            onClick={() => history.push('/lobby/overview')}>
            Online-Multiplayer
          </Option>
        </Tooltip>
      </div>
    </>
  );
}

export default Start;
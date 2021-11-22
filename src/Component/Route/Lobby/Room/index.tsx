import React from 'react';
import { Card, CircularProgress } from '@material-ui/core';
import Head from './Head';
import Select from './Select';
import * as Dialog from './Dialog';
import useSelector from 'Store/useSelector';
import { useDispatch } from 'react-redux';
import * as Action from 'Store/Action';

const Room: React.FC = () => {
  const room = useSelector(state => state.Lobby.room);
  const dispatch = useDispatch();
  const [share, setShare] = React.useState(false);
  const color = useSelector(state => state.Lobby.color);

  if (!room) {
    return <CircularProgress/>;
  }
  else {
    const link = `/lobby/join/${room._id}`;
    return (
      <>
        <Dialog.Share
          open={share}
          link={link}
          onClose={() => setShare(false)}
          onCopy={() => navigator.clipboard.writeText(link)}/>
        <Card style={{ width: 800, height: 600 }}>
          <Head
            title={room.name}
            disabled={{
              ready: !color,
              share: room.members.length === 2
            }}
            onShare={() => setShare(true)}
            onLeave={() => dispatch(Action.leaveLobby())}
            onReady={() => dispatch(Action.toggleReady())}/>
          <Select
            white={room.members.find(member => member.color === 'white')}
            black={room.members.find(member => member.color === 'black')}
            onSelect={color => dispatch(Action.selectColor(color))}/>
        </Card>
      </>
    );
  }
};

export default Room;
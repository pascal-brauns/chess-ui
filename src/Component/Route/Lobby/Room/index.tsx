import React from 'react';
import { Card, CircularProgress } from '@material-ui/core';
import Head from './Head';
import Select from './Select';
import * as Dialog from './Dialog';
import useSelector from 'Store/useSelector';
import { useDispatch } from 'react-redux';
import * as Action from 'Store/Action';
import { useParams } from 'react-router-dom';

type Params = {
  id: string;
};

const Room: React.FC = () => {
  const room = useSelector(state => state.Lobby.room);
  const dispatch = useDispatch();
  const [share, setShare] = React.useState(false);
  const color = useSelector(state => state.Lobby.color);

  const { id } = useParams<Params>()

  React.useEffect(
    () => {
      dispatch(Action.reviveLobby(id));
    },
    [id]
  );

  if (!room) {
    return <CircularProgress/>;
  }
  else {
    return (
      <>
        <Dialog.Share
          open={share}
          link={`/lobby/join/${room._id}`}
          onClose={() => setShare(false)}
          onCopy={() => navigator.clipboard.writeText(`/lobbies/${room._id}/join`)}/>
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
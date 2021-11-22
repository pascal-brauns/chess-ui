import React from 'react';
import * as Type from 'Type';
import Game from 'Component/Game';
import useSelector from 'Store/useSelector';
import * as Action from 'Store/Action';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { Color } from 'chess-processor';
import { useParams, useHistory } from 'react-router-dom';

type Settings = Type.Multiplayer.Remote.Settings;

type Params = {
  id: string;
};

const Remote: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const game = useSelector(state => state.Game.match);
  const color = useSelector(state => state.Game.color);
  const [settings, setSettings] = React.useState<Settings>({
    type: 'remote-multiplayer',
    legend: false
  });

  const { id } = useParams<Params>();

  const user = useSelector(state => state.User.identity);

  React.useEffect(
    () => {
      if (!user) {
        dispatch(Action.reviveUser());
      }
    },
    [JSON.stringify(user)]
  );

  React.useEffect(
    () => {
      if (user) {
        dispatch(Action.reviveGame(id));
      }
    },
    [id, JSON.stringify(user)]
  );

  if (!game || !color) {
    return <CircularProgress/>;
  }

  return (
    <Game
      value={game.state}
      player={{
        [color]: 'human',
        [Color.opposite(color)]: 'remote-human'
      } as Record<Type.Chess.Color, Type.Assistant.Player>}
      settings={settings}
      onConfigure={(next: Settings) => setSettings(next)}
      onPlacement={placement => dispatch(Action.act(placement))}
      onRedo={() => null}
      onUndo={() => null}
      onExit={() => history.push('/lobby/overview')}/>
  );
}

export default Remote;
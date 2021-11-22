import React from 'react';
import * as Type from 'Type';
import Game from 'Component/Game';
import useSelector from 'Store/useSelector';
import * as Action from 'Store/Action';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { Color } from 'chess-processor';
import { useHistory } from 'react-router-dom';

type Settings = Type.Multiplayer.Remote.Settings;

const Remote: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const game = useSelector(state => state.Game.match);
  const color = useSelector(state => state.Game.color);
  const [settings, setSettings] = React.useState<Settings>({
    type: 'remote-multiplayer',
    legend: false
  });

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
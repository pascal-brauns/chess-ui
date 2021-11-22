import React from 'react';
import * as Type from 'Type';
import Game from 'Component/Game';
import useSelector from 'Store/useSelector';
import * as Action from 'Store/Action';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { Color } from 'chess-processor';
import { useParams } from 'react-router-dom';

type Settings = Type.Multiplayer.Remote.Settings;

type Params = {
  id: string;
};

const Remote: React.FC = () => {
  const dispatch = useDispatch();
  const game = useSelector(state => state.Game.match);
  const color = useSelector(state => state.Lobby.color);
  const [settings, setSettings] = React.useState<Settings>({
    type: 'remote-multiplayer',
    legend: false
  });

  const { id } = useParams<Params>()

  React.useEffect(
    () => {
      dispatch(Action.reviveGame(id));
    },
    [id]
  );

  if (!game) {
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
      onUndo={() => null}/>
  );
}

export default Remote;
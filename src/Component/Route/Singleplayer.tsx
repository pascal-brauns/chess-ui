import React from 'react';
import { State } from 'chess-processor';
import Game from 'Component/Game';
import * as Type from 'Type';

type Settings = Type.Singleplayer.Settings;

const Singleplayer: React.FC = () => {
  const [state, setState] = React.useState(State.initial());
  const [settings, setSettings] = React.useState<Settings>({
    type: 'singleplayer',
    legend: false,
    difficulty: 5
  });
  return (
    <Game
      value={state}
      player={{
        white: 'human',
        black: 'ai'
      }}
      settings={settings}
      onConfigure={(next: Settings) => setSettings(next)}
      onPlacement={action => setState(State.dispatch(state, action))}
      onRedo={() => setState(State.redo(state))}
      onUndo={() => setState(State.undo(state))}/>
  );
}

export default Singleplayer;
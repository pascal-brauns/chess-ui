import React from 'react';
import { State } from 'chess-processor';
import * as Type from 'Type';
import Game from 'Component/Game';

type Settings = Type.Multiplayer.Local.Settings;

const Local: React.FC = () => {
  const [state, setState] = React.useState(State.initial());
  const [settings, setSettings] = React.useState<Settings>({
    type: 'local-multiplayer',
    legend: false,
  });

  return (
    <Game
      value={state}
      player={{
        white: 'human',
        black: 'human'
      }}
      settings={settings}
      onConfigure={(next: Settings) => setSettings(next)}
      onPlacement={action => setState(State.dispatch(state, action))}
      onRedo={() => setState(State.redo(state))}
      onUndo={() => setState(State.undo(state))}/>
  );
}

export default Local;
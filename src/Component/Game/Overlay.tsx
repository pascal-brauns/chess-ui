import React from 'react';
import { Color } from 'chess-processor';
import * as Type from 'Type';
import * as Assistant from './Assistant';
import Corner from './Corner';
import * as Dialog from './Dialog';

export type Props = {
  remote?: boolean;
  value: Type.Chess.State;
  settings: Type.Settings;
  pick: Type.Chess.Pick;
  hover: Type.Chess.Field;
  promotion: Type.Chess.Promotion;
  onConfigure: (next: Type.Settings) => void;
  onPlacement: (action: Type.Chess.Placement) => void;
  onPromotion: (promotion: Type.Chess.Promotion) => void;
  onUndo: () => void;
  onRedo: () => void;
};

const Overlay: React.FC<Props> = ({
  value, settings, pick, hover, promotion, remote,
  onUndo, onRedo, onConfigure, onPromotion
}) => {
  const [menu, setMenu] = React.useState<Type.Assistant.Menu>(null);
  const turn = Color.turn(value.timeline);
  return (
    <>
      <Dialog.Main
        open={menu === 'main'}
        disabled={{
          start: !value.timeline.history.length
        }}
        onClick={option => setMenu(
          option === 'close'
            ? null
            : option
        )}/>
      <Dialog.Settings
        open={menu === 'settings'}
        value={settings}
        onChange={onConfigure}
        onBack={() => setMenu('main')}/>
      <Assistant.Podium
        winner={Color.winner(value.timeline, value.actions)}
        onUndo={onUndo}/>
      <Corner vertical='top' horizontal='left'>
        <Assistant.Turn
          turn={turn}
          pick={pick?.field}
          actions={value.actions}
          hover={hover}/>
      </Corner>
      <Corner vertical='top' horizontal='right'>
        <Assistant.Button.Menu
          onClick={() => setMenu('main')}/>
      </Corner>
      <Corner vertical='bottom' horizontal='left'>
        <Assistant.Timeline
          value={value.timeline}
          remote={remote}
          onRedo={onRedo}
          onUndo={onUndo}/>
      </Corner>
      <Corner vertical='bottom' horizontal='right'>
        <Assistant.Button.Hint/>
      </Corner>
      <Dialog.Promotion
        value={promotion}
        onChange={onPromotion}/>
    </>
  );
}

export default Overlay;
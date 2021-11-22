import React from 'react';
import { Color } from 'chess-processor';
import * as Type from 'Type';
import Board from './Board';
import Overlay from './Overlay';

export type Props = {
  value: Type.Chess.State;
  settings: Type.Settings;
  onConfigure: (next: Type.Settings) => void;
  onUndo: () => void;
  onRedo: () => void;
  onPlacement: (placement: Type.Chess.Placement) => void;
  player: Record<Type.Chess.Color, Type.Assistant.Player>;
};

const Game: React.FC<Props> = ({
  settings, value, player,
  onConfigure, onUndo, onRedo, onPlacement,
}) => {
  const [pick, setPick] = React.useState<Type.Chess.Pick>(null);
  const [hover, setHover] = React.useState<Type.Chess.Field>(null);
  const [promotion, setPromotion] = React.useState<Type.Chess.Promotion>(null);

  return (
    <>
      <Overlay
        value={value}
        pick={pick}
        hover={hover}
        settings={settings}
        promotion={promotion}
        onConfigure={onConfigure}
        onPlacement={onPlacement}
        onRedo={onRedo}
        onUndo={onUndo}
        onPromotion={promotion => {
          onPlacement(promotion);
          setPromotion(null);
        }}/>
      <Board
        value={value.board}
        timeline={value.timeline}
        pick={pick}
        rotate={player.black === 'human' && player.white !== 'human'}
        legend={settings.legend}
        disabled={player[Color.turn(value.timeline)] !== 'human'}
        onClick={action => {
          if (action.type === 'pick') {
            setPick(action)
          }
          else if (action.type === 'promotion') {
            setPick(null);
            setPromotion(action);
          }
          else {
            setPick(null);
            onPlacement(action);
          }
        }}
        onMouseEnter={setHover}
        onMouseLeave={() => setHover(null)}/>
    </>
  );
}

export default Game;
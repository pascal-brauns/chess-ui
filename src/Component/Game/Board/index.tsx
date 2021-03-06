import React from 'react';
import { Card } from '@material-ui/core';
import { Turn } from 'chess-processor';
import Legend from './Legend';
import * as Type from 'Type';
import Area from './Area';

export type Props = {
  value: Type.Chess.Board;
  pick: Type.Chess.Pick;
  timeline: Type.Chess.Timeline;
  legend: boolean;
  disabled: boolean;
  onClick: (action: Type.Chess.Action) => void;
  onMouseLeave: () => void;
  onMouseEnter: (field: Type.Chess.Field) => void;
  rotate?: boolean;
};

const Board: React.FC<Props> = ({
  value, disabled, legend, timeline, pick, rotate,
  onClick, onMouseLeave, onMouseEnter
}) => {
  const actions = Turn.actions(value, timeline, pick);

  const area = (
    <Area
      value={value}
      disabled={disabled}
      rotate={rotate}
      actions={actions}
      onClick={onClick}
      onMouseEnter={onMouseEnter}/>
  );

  return (
    <Card
      elevation={24}
      onMouseLeave={onMouseLeave}
      style={{ transform: rotate ? 'rotate(180deg)' : null }}>
      {legend
        ? <Legend rotate={rotate}>{area}</Legend>
        : area}
    </Card>
  );
}

export default Board;
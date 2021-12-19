import React from 'react';
import { Color } from 'chess-processor';
import * as Grid from 'chess-processor/build/Library/Grid';
import * as Type from 'Type';
import Piece from './Piece';
import Marker from './Marker';
import ID from './ID';

export type Props = {
  disabled: boolean;
  value: Type.Chess.Field;
  action?: Type.Chess.Action;
  rotate?: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
};

const style = (index: number, rotate: boolean) => ({
  background: Color.field(
    Grid.Position.cartesian(index)
  ),
  transform: rotate ? 'rotate(180deg)' : null
});

const Field: React.FC<Props> = ({
  value, action, disabled, rotate,
  onClick, onMouseEnter
}) => (
  <div
    style={style(value.index, rotate)}
    onMouseEnter={onMouseEnter}
    onClick={() => !disabled && onClick()}>
    <div style={{
      position: 'relative',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    }}>
      {/* <ID index={value.index}/> */}
      {value.piece && <Piece value={value.piece}/>}
      {action && !disabled && <Marker action={action} piece={value.piece}/>}
    </div>
  </div>
);

export default Field;
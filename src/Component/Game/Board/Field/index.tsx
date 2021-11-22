import React from 'react';
import { Color } from 'chess-processor';
import * as Grid from 'chess-processor/build/Library/Grid';
import * as Type from 'Type';
import Content from './Content';

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
    <Content>
      {/* <Content.ID index={value.index}/> */}
      {value.piece && <Content.Piece value={value.piece}/>}
      {action && !disabled && <Content.Marker action={action} piece={value.piece}/>}
    </Content>
  </div>
);

export default Field;
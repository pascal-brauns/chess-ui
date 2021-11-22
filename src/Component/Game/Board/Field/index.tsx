import React from 'react';
import { Color } from 'chess-processor';
import * as Grid from 'chess-processor/build/Library/Grid';
import * as Type from 'Type';
import Content from './Content';

export type Props = {
  disabled: boolean;
  value: Type.Chess.Field;
  action?: Type.Chess.Action;
  onClick: () => void;
  onMouseEnter: () => void;
};

const style = (index: number) => ({
  background: Color.field(
    Grid.Position.cartesian(index)
  )
});

const Field: React.FC<Props> = ({
  value, action, disabled,
  onClick, onMouseEnter
}) => (
  <div
    style={style(value.index)}
    onMouseEnter={onMouseEnter}
    onClick={() => !disabled && onClick()}>
    <Content>
      <Content.ID index={value.index}/>
      {value.piece && <Content.Piece value={value.piece}/>}
      {action && !disabled && <Content.Marker action={action} piece={value.piece}/>}
    </Content>
  </div>
);

export default Field;
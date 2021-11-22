import React from 'react';
import { Card } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import * as Type from 'Type';

export type Props = {
  value: Type.Chess.Color;
  onClick: () => void;
  selected: boolean;
  ready: boolean;
};

const style = (color: Type.Chess.Color, selected: boolean): React.CSSProperties => ({
  width: 160,
  height: 160,
  background: color,
  cursor: 'pointer',
  border: selected ? '4px solid yellow' : null,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Color: React.FC<Props> = ({ value, selected, onClick, ready }) => (
  <Card
    elevation={selected ? 24 : 12}
    onClick={onClick}
    style={style(value, selected)}>
    {ready && (
      <CheckCircle
        fontSize='large'
        style={{ color: 'green' }}/>
    )}
  </Card>
);

export default Color;
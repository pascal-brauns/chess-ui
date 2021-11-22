import React from 'react';
import { Typography } from '@material-ui/core';
import * as Type from 'Type';
import Color from './Color';

export type Props = {
  color: Type.Chess.Color;
  onSelect: () => void;
  nickname?: string;
  ready: boolean;
};

const style: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 200,
};

const Player: React.FC<Props> = ({ color, onSelect, nickname, ready }) => (
  <div style={style}>
    <Color
      value={color}
      selected={Boolean(nickname)}
      ready={ready}
      onClick={onSelect}/>
    <div style={{ height: 32 }}/>
    <div style={{ height: 32 }}>
      <Typography variant='h6'>
        {nickname}
      </Typography>
    </div>
  </div>
);

export default Player;
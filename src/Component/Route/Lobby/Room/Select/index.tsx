import React from 'react';
import { CardContent } from '@material-ui/core';
import Player from './Player';
import * as Type from 'Type';
import * as API from 'API';

export type Props = {
  black: API.Type.Member;
  white: API.Type.Member;
  onSelect: (color: Type.Chess.Color) => void;
};

const Select: React.FC<Props> = ({ black, white, onSelect }) => (
  <CardContent style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '84%',
    boxSizing: 'border-box',
    paddingTop: '8%',
    paddingLeft: '16%',
    paddingRight: '16%'
  }}>
    <Player
      color='black'
      ready={black?.ready}
      onSelect={() => onSelect('black')}
      nickname={black?.nickname}/>
    <Player
      color='white'
      ready={white?.ready}
      onSelect={() => onSelect('white')}
      nickname={white?.nickname}/>
  </CardContent>
);

export default Select;
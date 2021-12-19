import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import * as Type from 'Type';
import * as Image from 'Image';

export type Props = {
  value: Type.Chess.Piece;
}

const Piece: React.FC<Props> = ({ value }) => {
  const desktop = useMediaQuery('(min-width:1024px)');
  return (
    <div style={{
      width: desktop ? '96px' : '48px',
      height: desktop ? '96px' : '48px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      <span style={{
        width: desktop ? 64 : 40,
        height: desktop ? 64 : 40,
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'lightgrey'
      }}>
        <img
          src={Image.Piece.url(value.type, value.color)}
          width={desktop ? 56 : 32}/>
      </span>
    </div>
  );
}

export default Piece;
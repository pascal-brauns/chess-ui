import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import * as Type from 'Type';
import * as Image from './Image';

const capitalize = (text: string) => (
  text[0].toUpperCase() + text.substring(1)
);

export type Props = {
  value: Type.Chess.Piece;
}

type Type = Type.Chess.Piece['type'];
type Color = Type.Chess.Color;

export const url = (type: Type, color: Color): string => (
  Image
    ?.[capitalize(type)]
    ?.[capitalize(color)]
);

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
        width: (
          desktop
            ? 64
            : 40
        ),
        height: (
          desktop
            ? 64
            : 40
        ),
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'lightgrey'
      }}>
        <img
          src={url(value.type, value.color)}
          width={
            desktop
              ? 56
              : 32
          }/>
      </span>
    </div>
  );
}

export default Piece;
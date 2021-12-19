import React from 'react';
import { Tooltip, useMediaQuery } from '@material-ui/core';
import * as Type from 'Type';

const capitalize = (text: string) => (
  text[0].toUpperCase() + text.substring(1)
);

const yellow = 'rgb(240, 240, 0)';
const blue = '#00CCFF';
const red = 'rgb(224, 80, 80)';
const green = 'rgb(37, 156, 69)';

export const border = {
  pick: `5px solid ${yellow}`,
  castling: `5px solid ${green}`,
  hit: `5px solid ${red}`,
  move: `5px solid ${blue}`,
  promotion: `5px solid ${green}`
};

export type Props = {
  action: Type.Chess.Action;
  piece?: Type.Chess.Piece;
};

const Marker: React.FC<Props> = ({ action, piece }) => {
  const [hover, setHover] = React.useState(false);
  const clickable = action.type !== 'pick' || hover;
  const desktop = useMediaQuery('(min-width:1024px)');

  return (
    <Tooltip title={piece?.type ? capitalize(piece?.type) : ''}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'absolute',
          left: 4,
          top: 4,
          width: desktop ? '88px' : '48px',
          height: desktop ? '88px' : '48px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          border: (
            clickable
              ? border[
                action.type === 'move' && action.to.piece
                  ? 'hit'
                  : action.type
              ]
              : null
          ),
          cursor: (
            clickable
              ? action.type === 'pick' ? 'grab' : 'pointer'
              : null
          ),
        }}/>
    </Tooltip>
  );
}

export default Marker;
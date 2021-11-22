import React from 'react';
import { Fab, Portal, Backdrop, Typography } from '@material-ui/core';
import { Replay, Undo } from '@material-ui/icons';
import * as Type from 'Type';

export type Props = {
  winner: Type.Chess.Color;
  onUndo: () => void;
};

const Podium: React.FC<Props> = ({ winner, onUndo }) => (
  <Portal container={document.getElementById('overlay')}>
    <Backdrop
      open={Boolean(winner)}
      style={{ zIndex: 2000 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 196
      }}>
        <Typography variant='h4'>
          {winner && (
            `🏆 ${winner[0].toUpperCase() + winner.substring(1)} is the winner 🏆`
          )}
        </Typography>
        <div style={{ height: 48 }}/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <span style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Fab onClick={onUndo}>
              <Undo/>
            </Fab>
            <div style={{ height: 8 }}/>
            Undo
          </span>
          {/* <div style={{ width: 32 }}/>
          <span style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Fab onClick={() => onStart('local-multiplayer')}>
              <Replay/>
            </Fab>
            <div style={{ height: 8 }}/>
            Replay
          </span> */}
        </div>
      </div>
    </Backdrop>
  </Portal>
);

export default Podium;
import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import * as Type from 'Type';
import * as Multiplayer from './Multiplayer';
import Singleplayer from './Singleplayer';

export type Props = {
  open: boolean;
  onClick: () => void;
  onBack: () => void;
};

const Start: React.FC<Props> = ({ open, onClick, onBack }) => (
  <Dialog
    open={open}
    style={{
      zIndex: 2000,
      marginBottom: 196
    }}
    transitionDuration={{
      exit: 0
    }}>
    <DialogTitle>
      Start new game
    </DialogTitle>
    <DialogContent>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 132
      }}>
        <Singleplayer onClick={() => onClick()}/>
        <Multiplayer.Local onClick={() => onClick()}/>
        <Multiplayer.Remote onClick={() => onClick()}/>
      </div>
      <div style={{ height: 8 }}/>
    </DialogContent>
  </Dialog>
);

export default Start;
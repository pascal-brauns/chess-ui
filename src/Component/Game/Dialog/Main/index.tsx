import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import * as Button from './Button';

export type Props = {
  open: boolean;
  onClick: (option: 'start-new-game' | 'settings' | 'close') => void;
  disabled: {
    start: boolean;
  };
};

const Main: React.FC<Props> = ({ open, onClick, disabled }) => (
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
      Main menu
    </DialogTitle>
    <DialogContent>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 132
      }}>
        <Button.Start
          disabled={disabled.start}
          onClick={() => onClick('start-new-game')}/>
        <Button.Settings onClick={() => onClick('settings')}/>
        <Button.Close onClick={() => onClick('close')}/>
      </div>
      <div style={{ height: 8 }}/>
    </DialogContent>
  </Dialog>
  
);

export default Main;
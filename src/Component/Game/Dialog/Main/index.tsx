import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import * as Button from './Button';

export type Props = {
  open: boolean;
  onClick: (option: 'settings' | 'close' | 'exit') => void;
};

const Main: React.FC<Props> = ({ open, onClick }) => (
  <Dialog
    open={open}
    style={{
      zIndex: 2000,
      marginBottom: 196
    }}
    transitionDuration={{
      exit: 0
    }}>
    <span style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 16,
      boxSizing: 'border-box'
    }}>
      <DialogTitle>
        Main menu
      </DialogTitle>
      <IconButton
        size='small'
        onClick={() => onClick('close')}>
        <Close/>
      </IconButton>
    </span>
    <DialogContent>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 96
      }}>
        <Button.Settings onClick={() => onClick('settings')}/>
        <Button.Exit onClick={() => onClick('exit')}/>
      </div>
      <div style={{ height: 8 }}/>
    </DialogContent>
  </Dialog>
  
);

export default Main;
import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@material-ui/core';

export type Props = {
  open: boolean;
  value: string;
  onChange: (next: string) => void;
  onConfirm: () => void;
}

const Nickname: React.FC<Props> = ({ value, open, onChange, onConfirm }) => (
  <Dialog open={open} style={{ zIndex: 2000 }}>
    <DialogTitle>
      What's your nickname?
    </DialogTitle>
    <DialogContent>
      <span style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
        paddingBottom: 32
      }}>
        <TextField
          value={value}
          onChange={event => onChange(event.target.value)}
          onKeyDown={event => (
            event.key === 'Enter' &&
            setTimeout(onConfirm, 80)
          )}
          size='small'
          variant='outlined'/>
        <div style={{ width: 16 }}/>
        <Button
          variant='contained'
          onClick={onConfirm}>
          OK
        </Button>
      </span>
    </DialogContent>
  </Dialog>
);

export default Nickname;
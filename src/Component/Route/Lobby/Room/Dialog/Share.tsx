import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText,
  IconButton
} from '@material-ui/core';
import { Close, Queue } from '@material-ui/icons';

export type Props = {
  open: boolean;
  link: string;
  onClose: () => void;
  onCopy: () => void;
};

const Share: React.FC<Props> = ({ open, link, onClose, onCopy }) => (
  <Dialog
    fullWidth
    maxWidth='xs'
    open={open}>
    <span style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      paddingRight: 16
    }}>
      <DialogTitle>Share</DialogTitle>
      <IconButton
        size='small'
        onClick={onClose}>
        <Close/>
      </IconButton>
    </span>
    <DialogContent>
      <DialogContentText>
        To invite someone to the lobby share this link
      </DialogContentText>
      <DialogContentText style={{
        background: 'rgb(33, 33, 33)',
        borderRadius: 4,
        boxSizing: 'border-box',
        padding: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {link}
        <IconButton
          size='small'
          onClick={onCopy}>
          <Queue/>
        </IconButton>
      </DialogContentText>
    </DialogContent>
  </Dialog>
);

export default Share;
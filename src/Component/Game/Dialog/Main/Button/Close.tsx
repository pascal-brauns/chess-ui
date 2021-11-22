import React from 'react';
import { Button } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

export type Props = {
  onClick: () => void;
};

const Close: React.FC<Props> = ({ onClick }) => (
  <Button
    onClick={onClick}
    variant='contained'
    startIcon={<CloseIcon/>}
    style={{ width: 192, display: 'flex', justifyContent: 'flex-start' }}>
    Close
  </Button>
);

export default Close;
import React from 'react';
import { Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

export type Props = {
  onClick: () => void;
};

const Exit: React.FC<Props> = ({ onClick }) => (
  <Button
    onClick={onClick}
    variant='contained'
    startIcon={<ExitToApp/>}
    style={{ width: 192, display: 'flex', justifyContent: 'flex-start' }}>
    Exit
  </Button>
);

export default Exit;
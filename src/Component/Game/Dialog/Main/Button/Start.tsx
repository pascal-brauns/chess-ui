import React from 'react';
import { Button } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

export type Props = {
  onClick: () => void;
  disabled: boolean;
};

const Start: React.FC<Props> = ({ onClick, disabled }) => (
  <Button
    variant='contained'
    startIcon={<PlayArrow/>}
    onClick={onClick}
    disabled={disabled}
    style={{ width: 192, display: 'flex', justifyContent: 'flex-start' }}>
    Start new game
  </Button>
);

export default Start;
import React from 'react';
import { Button } from '@material-ui/core';

export type Props = {
  onClick: () => void;
};

const Local: React.FC<Props> = ({ onClick }) => (
  <Button
    variant='contained'
    onClick={onClick}
    style={{ width: 240, display: 'flex', justifyContent: 'flex-start' }}>
    Player vs. Player (local)
  </Button>
);

export default Local;
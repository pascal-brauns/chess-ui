import React from 'react';
import { Button } from '@material-ui/core';

export type Props = {
  onClick: () => void;
};

const Singleplayer: React.FC<Props> = ({ onClick }) => (
  <Button
    variant='contained'
    onClick={onClick}
    style={{ width: 240, display: 'flex', justifyContent: 'flex-start' }}>
    Player vs. AI
  </Button>
);

export default Singleplayer;
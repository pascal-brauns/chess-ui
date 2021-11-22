import React from 'react';
import { Fab } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

export type Props = {
  onClick: () => void;
}

const Menu: React.FC<Props> = ({ onClick }) => (
  <Fab
    onClick={onClick}>
    <MenuIcon/>
  </Fab>
);

export default Menu;
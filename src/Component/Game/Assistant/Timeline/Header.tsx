import React from 'react';
import { CardHeader, IconButton } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

export type Props = {
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

const Header: React.FC<Props> = ({
  expanded, onExpand, onCollapse
}) => (
  <CardHeader
    title='History'
    action={
      <IconButton onClick={() => (
        expanded
          ? onCollapse()
          : onExpand()
      )}>
        {expanded
          ? <ExpandMore/>
          : <ExpandLess/>}
      </IconButton>
    }/>
);

export default Header;
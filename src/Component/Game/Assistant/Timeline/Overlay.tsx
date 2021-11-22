import React from 'react';
import { Popper, Grow, Card } from '@material-ui/core';

export type Props = {
  anchor: HTMLElement;
  open: boolean;
  empty: boolean;
};

const Overlay: React.FC<Props> = ({ anchor, open, children, empty }) => (
  <Popper
    placement='top'
    anchorEl={anchor}
    open={open}
    transition>
    {({ TransitionProps }) => (
      <div style={{ marginBottom: 16 }}>
        {!empty && (
          <Grow {...TransitionProps}>
            <Card>
              {children}
            </Card>
          </Grow>
        )}
      </div>
    )}
  </Popper>
);

export default Overlay;
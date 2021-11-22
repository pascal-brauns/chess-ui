import React from 'react';
import { Fab } from '@material-ui/core';
import { Close, Restore } from '@material-ui/icons';

export type Props = {
  open: boolean;
  onClick: () => void;
  disabled: boolean;
};

const Toggle = React.forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <Fab
    ref={ref}
    onClick={props.onClick}
    disabled={props.disabled}>
    {props.open
      ? <Close/>
      : <Restore/>}
  </Fab>
));

export default Toggle;
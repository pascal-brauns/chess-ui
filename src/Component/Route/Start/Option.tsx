import React from 'react';
import { Button, Typography } from '@material-ui/core';

export type Props = {
  children: string;
  disabled?: boolean;
  onClick: () => void;
};

const Option = React.forwardRef<HTMLButtonElement, Props>(
  ({children, disabled, onClick }, ref) => (
    <Button
      ref={ref}
      variant='contained'
      onClick={onClick}
      disabled={disabled}
      style={{ width: 360, height: '3.5rem' }}>
      <Typography
        variant='h6'
        style={{ fontWeight: 'bold' }}>
        {children}
      </Typography>
    </Button>
  )
);

export default Option;
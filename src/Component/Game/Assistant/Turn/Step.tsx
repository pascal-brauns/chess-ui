import React from 'react';
import { Card, Tooltip } from '@material-ui/core';

export type Props = {
  background: string;
  title: string;
};

const Step: React.FC<Props> = ({ background, title, children }) => (
  <span style={{ boxSizing: 'border-box', marginBottom: 8 }}>
    <Tooltip arrow title={title} placement='right' open={true}>
      <Card style={{
        background,
        width: 72,
        height: 72,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {children}
      </Card>
    </Tooltip>
  </span>
)

export default Step;
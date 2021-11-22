import React from 'react';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

export type Props = {
  rotate?: boolean;
}

const Legend: React.FC<Props> = ({ children, rotate }) => (
  <>
    <Horizontal rotate={rotate}/>
    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Vertical rotate={rotate}/>
        <div>
          {children}
        </div>
      <Vertical rotate={rotate}/>
    </div>
    <Horizontal rotate={rotate}/>
  </>
);

export default Legend;
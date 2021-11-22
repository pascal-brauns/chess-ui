import React from 'react';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

const Legend: React.FC = ({ children }) => (
  <>
    <Horizontal/>
    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Vertical/>
      <div>
        {children}
      </div>
      <Vertical/>
    </div>
    <Horizontal/>
  </>
);

export default Legend;
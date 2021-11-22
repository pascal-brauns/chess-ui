import React from 'react';
import Piece from './Piece';
import Marker from './Marker';
import ID from './ID';

const Content: React.FC & {
  ID: typeof ID;
  Marker: typeof Marker;
  Piece: typeof Piece;
} = ({ children }) => (
  <div style={{
    position: 'relative',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  }}>
    {children}
  </div>
);

Content.ID = ID;
Content.Marker = Marker;
Content.Piece = Piece;

export default Content;
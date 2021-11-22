import React from 'react';
import Chronicle from './Chronicle';
import * as Button from './Button';
import Overlay from './Overlay';
import * as Type from 'Type';

export type Props = {
  value: Type.Chess.Timeline;
  remote?: boolean;
  onUndo: () => void;
  onRedo: () => void;
};

const Timeline: React.FC<Props> = ({ value, remote, onUndo, onRedo }) => {
  const [open, setOpen] = React.useState(false);
  const anchor = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 256
      }}>
        <Button.Undo
          disabled={remote || !value.history.length}
          onClick={onUndo}/>
        <Button.Toggle
          ref={anchor}
          open={value.history.length && open}
          disabled={!value.history.length}
          onClick={() => setOpen(!open)}/>
        <Button.Redo
          disabled={remote || !value.future.length}
          onClick={onRedo}/>
      </div>
      {anchor.current && (
        <Overlay
          anchor={anchor.current}
          open={open}
          empty={!history.length}>
          <Chronicle value={value}/>
        </Overlay>
      )}
    </>
  );
}

export default Timeline;
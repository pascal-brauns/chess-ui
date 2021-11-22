import React from 'react';
import { useDispatch } from 'react-redux';
import * as Action from 'Store/Action';
import { CircularProgress } from '@material-ui/core';
import useSelector from 'Store/useSelector';

const Loader: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const initialized = useSelector(state => state.App.initialized);
  React.useEffect(
    () => {
      dispatch(Action.initialize());
    },
    []
  );
  return (
    initialized
      ? <>{children}</>
      : <CircularProgress/>
  );
}

export default Loader;
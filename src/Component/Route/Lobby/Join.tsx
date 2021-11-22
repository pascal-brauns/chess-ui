import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Action from 'Store/Action';

type Params = {
  id: string;
};

const Join: React.FC = () => {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();

  React.useEffect(
    () => {
      dispatch(Action.joinLobby(id));
    },
    []
  );

  return null;
};

export default Join;
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as Action from 'Store/Action';
import useSelector from 'Store/useSelector';

type Params = {
  id: string;
};

const Join: React.FC = () => {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();

  const user = useSelector(state => state.User.identity);

  React.useEffect(
    () => {
      if (!user) {
        dispatch(Action.reviveUser());
      }
    },
    [JSON.stringify(user)]
  );

  React.useEffect(
    () => {
      if (user) {
        dispatch(Action.joinLobby(id));
      }
    },
    [JSON.stringify(user)]
  );

  return null;
};

export default Join;
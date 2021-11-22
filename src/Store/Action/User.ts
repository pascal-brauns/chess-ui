import { createAction } from '@reduxjs/toolkit';
import * as API from 'API';

type User = API.Type.User;

export const createUser = createAction<string>('user/CREATE');

export const succeededToCreateUser = createAction<User>('user/SUCCEEDED_TO_CREATE');

export const updateUser = createAction<User>('user/UPDATE');

export const succeededToUpdateUser = createAction('user/SUCCEEDED_TO_UPDATE');

export const getUser = createAction<string>('user/GET');

export const succeededToGetUser = createAction<User>('user/SUCCEEDED_TO_GET');
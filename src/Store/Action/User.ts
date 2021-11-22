import { createAction } from '@reduxjs/toolkit';
import * as API from 'API';

type User = API.Type.User;

export const createUser = createAction<string>('user/CREATE');

export const succeededToCreateUser = createAction<User>('user/SUCCEEDED_TO_CREATE');

export const reviveUser = createAction('user/REVIVE');

export const succeededToReviveUser = createAction<User>('user/SUCCEEDED_TO_REVIVE');

export const failedToReviveUser = createAction('user/FAILED_TO_REVIVE');
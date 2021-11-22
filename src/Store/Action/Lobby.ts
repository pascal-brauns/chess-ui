import { createAction } from '@reduxjs/toolkit';
import * as API from 'API';
import * as Type from 'Type';

type Color = Type.Chess.Color;
type Lobby = API.Type.Lobby;
type User = API.Type.User;

export const createLobby = createAction<User>('lobby/CREATE');

export const succeededToCreateLobby = createAction<Lobby>('lobby/SUCCEEDED_TO_CREATE');

export const receiveLobby = createAction<Lobby>('lobby/RECEIVE');

export const selectColor = createAction<Color>('lobby/SELECT_COLOR');

export const toggleReady = createAction('lobby/TOGGLE_READY');

export const leaveLobby = createAction('lobby/LEAVE');

export const getLobbyColor = createAction('lobby/GET_COLOR');

export const succeededToGetLobbyColor = createAction<Color>('lobby/SUCCEEDED_TO_GET_COLOR');

export const joinLobby = createAction<string>('lobby/JOIN');

export const getLobby = createAction<string>('lobby/GET');

export const receiveLobbies = createAction<Lobby[]>('lobby/RECEIVE_ALL');

export const getLobbies = createAction('lobby/GET_ALL');

export const subscribeLobby = createAction<string>('lobby/SUBSCRIBE');
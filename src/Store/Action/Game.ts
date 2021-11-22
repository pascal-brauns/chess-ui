import { createAction } from '@reduxjs/toolkit';
import * as API from 'API';
import * as Type from 'Type';

type Color = Type.Chess.Color;
type Game = Type.Backend.Match;
type Placement = Type.Chess.Placement;

export const receiveGame = createAction<Game>('game/RECEIVE');

export const act = createAction<Placement>('game/ACT');

export const subscribeGame = createAction<string>('game/SUBSCRIBE');

export const getGameColor = createAction<string>('game/GET_COLOR');

export const succeededToGetGameColor = createAction<Color>('game/SUCCEEDED_TO_GET_COLOR');

export const reviveGame = createAction<string>('game/REVIVE');

export const succeededToReviveGame = createAction<Game>('game/SUCCEEDED_TO_REVIVE');
import * as HTTP from './HTTP';
import * as Type from 'Type';

type User = Type.User;
type Color = Type.Chess.Color;

export const create = async (user: User) => (
  (await HTTP.client
    .post('/lobbies', user))
    .data
);

export const all = async () => (
  (await HTTP.client
    .get('/lobbies'))
    .data
);

export const get = async (id: string) => (
  (await HTTP.client
    .get(`/lobbies/${id}`))
    .data
);

export const getColor = async (id: string, user: User) => (
  (await HTTP.client
    .get(`/lobbies/${id}/members/${user._id}/color`))
    .data
);

export const join = async (id: string, user: User) => (
  (await HTTP.client
    .post(`/lobbies/${id}/members/${user._id}/join`))
    .data
);

export const leave = async (id: string, user: User) => (
  (await HTTP.client
    .delete(`/lobbies/${id}/members/${user._id}/leave`))
    .data
);

export const selectColor = async (id: string, user: User, color: Color) => (
  (await HTTP.client
    .put(`/lobbies/${id}/members/${user._id}/color/${color}`))
    .data
);

export const toggleReady = async (id: string, user: User) => (
  (await HTTP.client
    .put(`/lobbies/${id}/members/${user._id}/ready`))
    .data
);
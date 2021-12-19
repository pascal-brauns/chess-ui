import * as HTTP from './HTTP';
import * as Type from 'Type';

type User = Type.User;

export const create = async (nickname: string) => (
  (await HTTP.client
    .post('/users', {
      nickname
    }))
    .data
);

export const get = async (id: string) => (
  (await HTTP.client
    .get(`/users/${id}`))
    .data
);

export const set = async (id: string, user: User) => (
  (await HTTP.client
    .put(`/users/${id}`, user))
    .data
);
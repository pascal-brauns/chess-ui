import * as HTTP from './HTTP';

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
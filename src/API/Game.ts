import * as HTTP from './HTTP';
import * as Type from 'Type';

export const get = async (id: string) => (
  (await HTTP.client
    .get(`/games/${id}`))
    .data
);

export const getColor = async (id: string, user: Type.User) => (
  (await HTTP.client
    .get(`/games/${id}/player/${user._id}/color`))
    .data
);

export const dispatch = async (id: string, user: Type.User, placement: Type.Chess.Placement) => (
  (await HTTP.client
    .post(`/games/${id}/player/${user._id}/action`, placement))
    .data
);
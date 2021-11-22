import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? null : '/api'
});
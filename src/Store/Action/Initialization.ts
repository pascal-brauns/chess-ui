import { createAction } from '@reduxjs/toolkit';

export const initialize = createAction('app/INITIALIZE');

export const succeededToInitialize = createAction('app/SUCCEEDED_TO_INITIALIZE');

export const failedToInitialize = createAction('app/FAILED_TO_INITIALIZE');
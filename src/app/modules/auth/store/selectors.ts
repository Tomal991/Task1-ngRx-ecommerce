import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Authstate } from './state';

export const authState = createFeatureSelector<Authstate>('auth');

export const selectIsLoggedIn = createSelector(
  authState,
  (state) => state.loggedIn
);


export const selectCurrentUser = createSelector(
    authState,
    (state) => state.currentUser
  );
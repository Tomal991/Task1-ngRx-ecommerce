import { createReducer, on } from '@ngrx/store';
import {
  currentUserFailure,
  currentUserLoading,
  currentUserSuccess,
  loggedInFailure,
  loggedInLoading,
  loggedInSuccess,
} from './actions';
import { Authstate } from './state';

export const initialAuthState: Authstate = {
  loading: false,
  error: null,
  currentUser: null,
  loggedIn: false,
};

export const authReducer = createReducer(
  initialAuthState,

  ///loggedIn
  on(loggedInLoading, (state) => ({ ...state, loading: true })),
  on(loggedInSuccess, (state) => ({
    ...state,
    loading: false,
    loggedIn: true,
    error: null,
  })),
  on(loggedInFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loggedIn: false,
    error,
  })),
  //currentUSer

  on(currentUserLoading, (state) => ({ ...state, loading: true })),

  on(currentUserSuccess, (state, { currentUser }) => ({
    ...state,
    loading: false,
    currentUser,
    error: null,
  })),

  on(currentUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    currentUser: null,
    error,
  }))
);

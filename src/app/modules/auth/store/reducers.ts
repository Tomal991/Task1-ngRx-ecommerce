import { createReducer, on } from '@ngrx/store';
import {
  currentUserFailure,
  currentUserLoading,
  currentUserSuccess,
  loggedInFailure,
  loggedInLoading,
  loggedInSuccess,
  loginFailure,
  loginLoading,
  loginSuccess,
  logoutFailure,
  logoutLoading,
  logoutSuccess,
} from './actions';
import { AuthState } from './state';

export const initialAuthState: AuthState = {
  loading: false,
  error: null,
  currentUser: null,
  loggedIn: false,
};

export const authReducer = createReducer(
  initialAuthState,

  ///loggedIn
  on(loggedInLoading, (state) => ({ ...state, loading: true })),
  on(loggedInSuccess, (state, { isLoggedIn }) => ({
    ...state,
    loading: false,
    loggedIn: isLoggedIn,
    currentUser: isLoggedIn ? state.currentUser : null,
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
  })),

  //login
  on(loginLoading, (state) => ({ ...state, loading: true })),

  on(loginSuccess, (state, { currentUser }) => ({
    ...state,
    loading: false,
    currentUser,
    loggedIn: true,
    error: null,
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    currentUser: null,
    loggedIn: false,
    error,
  })),

  //logout
  on(logoutLoading, (state) => ({ ...state, loading: true })),

  on(logoutSuccess, (state) => ({
    ...state,
    loading: false,
    currentUser: null,
    loggedIn: false,
    error: null,
  })),

  on(logoutFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

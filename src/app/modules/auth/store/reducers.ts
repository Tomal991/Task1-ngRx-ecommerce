import { createReducer, on } from '@ngrx/store';
import {
  addedItemsOnCartFailure,
  addedItemsOnCartLoading,
  addedItemsOnCartSuccess,
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
  totalAmountFailure,
  totalAmountLoading,
  totalAmountSuccess,
  totalItemsOnCartFailure,
  totalItemsOnCartLoading,
  totalItemsOnCartSuccess,
} from './actions';
import { AuthState } from './state';

export const initialAuthState: AuthState = {
  loading: false,
  error: null,
  currentUser: {
    userId: '',
    name: '',
    mobile: '',
    email: '',
    address: '',
  },
  loggedIn: false,
  totalAmount: null,
  totalItemsOnCart: null,
  addedItemsOnCart: null,
  loginResponse: {accessToken: ''},
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

  on(loginSuccess, (state, { loginResponse }) => ({
    ...state,
    loading: false,
    loginResponse,
    loggedIn: true,
    error: null,
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    currentUser: null,
    loggedIn: false,
    error,
    loginResponse:null
  })),

  //logout
  on(logoutLoading, (state) => ({ ...state, loading: true })),

  on(logoutSuccess, (state) => ({
    ...state,
    loading: false,
    currentUser: null,
    loggedIn: false,
    error: null,
    loginResponse:null
  })),

  on(logoutFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  ///totalAmount
  on(totalAmountLoading, (state) => ({ ...state, loading: true })),
  on(totalAmountSuccess, (state, { totalAmount }) => ({
    ...state,
    loading: false,
    totalAmount,
    error: null,
  })),
  on(totalAmountFailure, (state, { error }) => ({
    ...state,
    loading: false,
    totalAmount: null,
    error,
  })),

  //addedItemsOnCart
  on(addedItemsOnCartLoading, (state) => ({ ...state, loading: true })),
  on(addedItemsOnCartSuccess, (state, { addedItemsOnCart }) => ({
    ...state,
    loading: false,
    addedItemsOnCart,
    error: null,
  })),
  on(addedItemsOnCartFailure, (state, { error }) => ({
    ...state,
    loading: false,
    addedItemsOnCart: null,
    error,
  })),

  //totalItemsOnCart
  on(totalItemsOnCartLoading, (state) => ({ ...state, loading: true })),
  on(totalItemsOnCartSuccess, (state, { totalItemsOnCart }) => ({
    ...state,
    loading: false,
    totalItemsOnCart,
    error: null,
  })),
  on(totalItemsOnCartFailure, (state, { error }) => ({
    ...state,
    loading: false,
    totalItemsOnCart: null,
    error,
  }))
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './state';

export const authState = createFeatureSelector<AuthState>('auth');

export const selectIsLoading= createSelector(
  authState,
  (state) => state.loading
);

export const selectIsLoggedIn = createSelector(
  authState,
  (state) => state.loggedIn
);


export const selectCurrentUser = createSelector(
    authState,
    (state) => state.currentUser
  );

  export const selectTotalAmount = createSelector(
    authState,
    (state) => state.totalAmount
  );

  export const selectAddedItemsOnCart = createSelector(
    authState,
    (state) => state.addedItemsOnCart
  );

  export const selectTotalItemsOnCart = createSelector(
    authState,
    (state) => state.totalItemsOnCart
  );
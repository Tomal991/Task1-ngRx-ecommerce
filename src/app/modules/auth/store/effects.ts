import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CartItem } from '../models/addedItems';
import { LoginResponse } from '../models/loginResponse';
import { AuthService } from '../services/auth.service';
import {
  addedItemsOnCartFailure,
  addedItemsOnCartLoading,
  addedItemsOnCartSuccess,
  loginFailure,
  loginLoading,
  loginSuccess,
} from './actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginLoading),
      mergeMap((loginRequest ) =>
        this.authService.login(loginRequest.loginRequest).pipe(
          map((loginResponse: LoginResponse) => {
            this.hotToastService.success('Welcome!login succedded');
            return loginSuccess({loginResponse});
          }),
          catchError((error) => {
            this.hotToastService.error('error');
            return of(loginFailure({ error }));
          })
        )
      )
    )
  );

  cartItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addedItemsOnCartLoading),
      mergeMap(( {addedItemsOnCart} ) =>
        this.authService.addedItemsOnCart(addedItemsOnCart).pipe(
          map(() => {
            return addedItemsOnCartSuccess({ addedItemsOnCart });
          }),
          catchError((error) => {
            this.hotToastService.error(error);
            return of(addedItemsOnCartFailure({ error }));
          })
        )
      )
    )
  );
  constructor(
    private authService: AuthService,
    private hotToastService: HotToastService,
    private actions$: Actions
  ) {}
}

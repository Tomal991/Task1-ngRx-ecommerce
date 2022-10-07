import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { loginFailure, loginLoading, loginSuccess } from './actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginLoading),
      mergeMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(({ token }) => {
            this.hotToastService.success('Welcome!login succedded')
            return loginSuccess({ currentUser: null });
          }),
          catchError((error) => {
            this.hotToastService.error(error)
            return of(loginFailure({ error }));
          })
        )
      )
    )
  );
  constructor(
    private authService: AuthService,
    private hotToastService: HotToastService,
    private actions$: Actions<Store>
  ) {}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, of } from 'rxjs';
import { CartItem } from '../models/addedItems';
import { LoginRequest } from '../models/loginRequest';
import { LoginResponse } from '../models/loginResponse';
import { currentUserLoading } from '../store/actions';
import { AuthState } from '../store/state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store<AuthState>) {}

  login(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>('http://localhost:3000/users', loginRequest).pipe(
      map((loginResponse: LoginResponse) => {
        if (loginResponse?.accessToken) {
          localStorage.setItem('token', JSON.stringify(loginResponse));
          this.store.dispatch(currentUserLoading());
          return loginResponse;
        }
      }),
      catchError((err) => of(new Error('Request failed')))
    );
  }

  // logout(): Observable<boolean> {
  //   try {
  //     localStorage.removeItem('token');
  //     return of(true);
  //   } catch (e) {
  //     return of(false);
  //   }
  // }

  // isLoggedIn(): Observable<boolean> {
  //   const token = localStorage.getItem('token');
  //   return of(!!token);
  // }

  // currentUser(): Observable<{ userId: number }> {
  //   return of({
  //     userId: 1,
  //   });
  // }

  totalAmount(): Observable<{ amount: number }> {
    return of({
      amount: 100,
    });
  }

  addedItemsOnCart(cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>('http://localhost:3000/cartItems',cartItem)
  }

  totalItemsOnCart(): Observable<{ items: number }> {
    return of({
      items: 20,
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../models/addedItems';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): Observable<{ token: string }> {
    return of({
      token: '',
    });
  }

  logout(): Observable<boolean> {
    try {
      localStorage.removeItem('token');
      return of(true);
    } catch (e) {
      return of(false);
    }
  }

  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return of(!!token);
  }

  currentUser(): Observable<{ userId: number }> {
    return of({
      userId: 1,
    });
  }

  totalAmount(): Observable<{ amount: number }> {
    return of({
      amount: 100,
    });
  }

  addedItemsOnCart(cartItem: CartItem): Observable<CartItem> {
    return of(cartItem);
  }

  totalItemsOnCart(): Observable<{ items: number }> {
    return of({
      items: 20,
    });
  }
}

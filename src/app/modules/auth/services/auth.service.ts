import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string):Observable<{token:string}>  {
    return of({
      token: '',
    });
  }

  logout():Observable<boolean>  {
    try {
      localStorage.removeItem('token');
      return of(true);
    } catch (e) {
      return of(false);
    }
  }

  isLoggedIn():Observable<boolean> {
    const token=localStorage.getItem('token')
    return of(!!token);
  }


  currentUser():Observable<{userId:number}>  {
    return of({
      userId:1
    })
  }
}

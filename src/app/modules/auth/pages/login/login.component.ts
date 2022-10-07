import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginLoading } from '../../store/actions';
import { selectIsLoading } from '../../store/selectors';
import { AuthState } from '../../store/state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loading$=this.authStore.select(selectIsLoading);

  constructor(private authStore:Store<AuthState>) { }

  ngOnInit(): void {
  }
  onLogin(){
    const loginInfo={
      username:"",
      password:""
    };
    this.authStore.dispatch(loginLoading({username:loginInfo.username,password:loginInfo.password}))
  }

}

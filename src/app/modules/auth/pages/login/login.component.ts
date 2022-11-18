import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoginRequest } from '../../models/loginRequest';
import { AuthService } from '../../services/auth.service';
import { loginLoading } from '../../store/actions';
import { selectIsLoading } from '../../store/selectors';
import { AuthState } from '../../store/state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private stores: Store<AuthState>,
    private _router: Router,
    private auth: AuthService
  ) {}

  ngOnDestroy(): void {
  
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  $loginForm_OnSubmit(form: FormGroup) {
    const formValue = this.loginForm.value;
    const loginRequest = {
      ...new LoginRequest(),
      ...formValue,
    };
    this.stores.dispatch(loginLoading({ loginRequest }));
  }
}




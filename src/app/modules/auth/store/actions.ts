import { createAction, props } from "@ngrx/store";



//loggedIn
export const loggedInLoading=createAction('[Auth] is logged loading');
export const loggedInSuccess=createAction('[Auth] is logged success',props<{isLoggedIn:boolean}>());
export const loggedInFailure=createAction('[Auth] is logged failure',props<{error:string}>());


//current user
export const currentUserLoading=createAction('[Auth] current user loading');
export const currentUserSuccess=createAction('[Auth] current user success',props<{currentUser:any}>());
export const currentUserFailure=createAction('[Auth] current user failure',props<{error:string}>());


//login
export const loginLoading=createAction('login Loading',props<{username:string,password:string}>());
export const loginSuccess=createAction('login Success',props<{currentUser:any}>());
export const loginFailure=createAction('login Failure',props<{error:string}>())


//logout
export const logoutLoading=createAction('logout Loading');
export const logoutSuccess=createAction('logout Success');
export const logoutFailure=createAction('logout Failure',props<{error:string}>())
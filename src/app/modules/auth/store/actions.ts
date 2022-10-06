import { createAction, props } from "@ngrx/store";

export const loggedInLoading=createAction('[Auth] is logged loading');
export const loggedInSuccess=createAction('[Auth] is logged success');
export const loggedInFailure=createAction('[Auth] is logged failure',props<{error:string}>());

export const currentUserLoading=createAction('[Auth] current user loading');
export const currentUserSuccess=createAction('[Auth] current user success',props<{currentUser:any}>());
export const currentUserFailure=createAction('[Auth] current user failure',props<{error:string}>());
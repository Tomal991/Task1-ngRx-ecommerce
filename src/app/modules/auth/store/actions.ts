import { createAction, props } from "@ngrx/store";
import { CartItem } from "../models/addedItems";



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


//totalAmount
export const totalAmountLoading=createAction('Total Amount loading');
export const totalAmountSuccess=createAction('Total Amount success',props<{totalAmount:number}>());
export const totalAmountFailure=createAction('Total Amount failure',props<{error:string}>());


//addedItemsOnCart
export const addedItemsOnCartLoading=createAction('added Items OnCart loading',props<{addedItemsOnCart:CartItem}>());
export const addedItemsOnCartSuccess=createAction('added Items OnCart success',props<{addedItemsOnCart:CartItem}>());
export const addedItemsOnCartFailure=createAction('added Items OnCart failure',props<{error:string}>());


//totalItemsOnCart
export const totalItemsOnCartLoading=createAction('total Items OnCart loading');
export const totalItemsOnCartSuccess=createAction('total Items OnCart success',props<{totalItemsOnCart:number}>());
export const totalItemsOnCartFailure=createAction('total Items OnCart failure',props<{error:string}>());
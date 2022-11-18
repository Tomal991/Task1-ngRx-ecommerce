import { CartItem } from "../models/addedItems";
import { LoginResponse } from "../models/loginResponse";
import { UserCredentials } from "../models/userCredentials";

export interface AuthState{
    loading:boolean;
    error:string;
    currentUser:UserCredentials; 
    loggedIn:boolean;
    totalAmount:number;
    addedItemsOnCart:CartItem
    totalItemsOnCart:number;
    loginResponse:LoginResponse

}
import { CartItem } from "../models/addedItems";

export interface AuthState{
    loading:boolean;
    error:string;
    currentUser:any; //TODO strictly type
    loggedIn:boolean;
    totalAmount:number;
    addedItemsOnCart:CartItem
    totalItemsOnCart:number;

}
export interface AuthState{
    loading:boolean;
    error:string;
    currentUser:any; //TODO strictly type
    loggedIn:boolean

}
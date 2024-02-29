import * as e from "express";


export class User {

    public id? : number;

    public userName : string;

    public email : string;

    public password: string;

    constructor(userName:string, email:string, password:string, id?:number){
        this.id = id;
        this.userName=userName;
        this.email=email;
        this.password=password;
    }

}
            


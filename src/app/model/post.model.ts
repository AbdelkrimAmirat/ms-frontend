


export class Post {

    public id? : number;
    public title : string;
    public content : string;
    public userId: number;

    constructor(title:string, content:string, userId:number, id?:number){
        this.id = id;
        this.title=title;
        this.content=content;
        this.userId=userId;
    }

}
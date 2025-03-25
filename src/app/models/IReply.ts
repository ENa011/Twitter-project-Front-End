export interface IReply{
    id:number;
    reply:String;
    liked:number;
    replyUsername:String;
    timeStamp:Date;
    tags:Set<any>;
    
}
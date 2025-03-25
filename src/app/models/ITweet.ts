import { IReply } from "./IReply";
import { ITag } from "./ITag";

export interface ITweet{
    content?:String;
    tweetUsername?:String;
    timeStamp?:Date;
    tags?:Set<ITag>;
    reply?:Array<IReply>
}
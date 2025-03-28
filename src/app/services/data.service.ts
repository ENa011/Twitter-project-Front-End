import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';
import { Observable } from 'rxjs';
import { ITweet } from '../models/ITweet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllTweet(){
    return this.httpClient.get('http://localhost:8080/api/v1.0/tweets/all')
  }

  postRegister(data:any){
    return this.httpClient.post('http://localhost:8080/api/v1.0/tweets/register', data, {responseType: 'text'});
  }

  getUserInfo(data?:String){
    return this.httpClient.get('http://localhost:8080/api/v1.0/tweets/users/search/' + data);
  }

  postPassword(name?:String, data?:any,){
    
    return this.httpClient.put('http://localhost:8080/api/v1.0/tweets/' + name + '/forgot', data, {responseType: 'text'});
  }

  postTweet(name:String, data:any){
    return this.httpClient.post('http://localhost:8080/api/v1.0/tweets/'+ name +'/add', data)
  }

  getUserTweet(name:String){
    return this.httpClient.get('http://localhost:8080/api/v1.0/tweets/' + name);
  }

  putLikeReply(name:string, id:number, data?:any){
    return this.httpClient.put('http://localhost:8080/api/v1.0/tweets/' + name + '/like/' + id, data);
  }

  postReply(name:string, id:number, data:any){
    return this.httpClient.post('http://localhost:8080/api/v1.0/tweets/' + name + '/reply/' + id, data)
  }

  updateTweet(name:string, id:number, data:any){
    return this.httpClient.put('http://localhost:8080/api/v1.0/tweets/'+ name +'/update/' + id, data)
  }

  deleteTweet(name:string, id:number){
    return this.httpClient.delete('http://localhost:8080/api/v1.0/tweets/'+ name +'/delete/' + id, {responseType: 'text'})
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) {}

  getAuth(data:any){
    return this.httpclient.post('http://localhost:8080/api/v1.0/tweets/login', data, {responseType: 'text'});
  }

  checkToken(): boolean {
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false
    }
   }

   decodeToken(){
       let token = localStorage.getItem('token');
        if(token){
          try {
            const decodedToken = jwtDecode(token);
            return decodedToken.sub;
          } catch (error) {
            return console.error('Invalid token:', error);
          }
        } else {
           return console.warn('No token found in local storage');
        }
   }
}

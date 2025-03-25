import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DataService } from '../../services/data.service';
import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  UserInfo:any;
  
  
  constructor(private dataService: DataService){

    let token = localStorage.getItem('token');
    if(token){
      try {
        const decodedToken = jwtDecode(token);
        this.dataService.getUserInfo(decodedToken.sub).subscribe((data)=>{
          this.UserInfo = data;})
      } catch (error) {
        console.error('Invalid token:', error);
      }
    } else {
        console.warn('No token found in local storage');
    }
     
  }
}

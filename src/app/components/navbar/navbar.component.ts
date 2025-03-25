import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router, public authService: AuthService){}

  onLogin(){
    this.router.navigateByUrl('/login');
 }

 onLogout(){
   localStorage.clear();
   this.router.navigateByUrl('/login');
 }

toHome(){
  this.router.navigateByUrl('/home');
}

 toProfile(){
  this.router.navigateByUrl('/profile');
 }

toPassword(){
  this.router.navigateByUrl('/password');

 }


 myTweet(){
  this.router.navigateByUrl('/myTweet/'+ this.authService.decodeToken());
 }

 toTweet(){
  this.router.navigateByUrl('/tweet');
 }

}

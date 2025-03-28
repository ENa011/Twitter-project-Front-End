import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ITweet } from '../../models/ITweet';
import { ITag } from '../../models/ITag';
import { IReply } from '../../models/IReply';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tweets:any[] =[];
  
  constructor(private dataService: DataService, private router: Router, public authService: AuthService){
      this.dataService.getAllTweet().subscribe((data:any)=> {
      this.tweets = data;
    })
  }

  onLike(name:string, id:number){
    return this.dataService.putLikeReply(name, id).subscribe((data)=>{window.location.reload();});
    
  }

  onReplyHandler(name:string, id:number){
    this.router.navigateByUrl('/reply/' + name +'/' +id);
  }
  
}

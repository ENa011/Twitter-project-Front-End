import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-tweet',
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './my-tweet.component.html',
  styleUrl: './my-tweet.component.css'
})
export class MyTweetComponent {

  user:any;

  userTweets:any[]= [];

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute, private router:Router){
    this.user = this.activateRoute.snapshot.paramMap.get('user');
    this.dataService.getUserTweet(this.user).subscribe((data:any)=> {
       this.userTweets = data;
    })
  }

  onUpdateHandler(name:string, id:number){
    this.router.navigateByUrl('/update/' + name + '/' + id);
  }

  onDeleteHandler(name:string, id:number){
    this.dataService.deleteTweet(name, id).subscribe((data)=>{
      this.router.navigateByUrl('/');
    });
    
  }
}

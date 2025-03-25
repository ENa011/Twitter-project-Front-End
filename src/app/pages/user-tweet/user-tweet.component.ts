import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tweet',
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './user-tweet.component.html',
  styleUrl: './user-tweet.component.css'
})
export class UserTweetComponent {
  user:any;

  userTweets:any[]= [];

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute){
    this.user = this.activateRoute.snapshot.paramMap.get('user');
    this.dataService.getUserTweet(this.user).subscribe((data:any)=> {
       this.userTweets = data;
    })
  }

}

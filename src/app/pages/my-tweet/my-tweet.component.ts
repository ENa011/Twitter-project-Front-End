import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-tweet',
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './my-tweet.component.html',
  styleUrl: './my-tweet.component.css'
})
export class MyTweetComponent {

  user:any;

  userTweets:any[]= [];

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute){
    this.user = this.activateRoute.snapshot.paramMap.get('user');
    this.dataService.getUserTweet(this.user).subscribe((data:any)=> {
       this.userTweets = data;
    })
  }
}

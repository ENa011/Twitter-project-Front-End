import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ITweet } from '../../models/ITweet';
import { ITag } from '../../models/ITag';
import { IReply } from '../../models/IReply';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tweets:any[] =[];
  
  constructor(private dataService: DataService){
      this.dataService.getAllTweet().subscribe((data:any)=> {
      this.tweets = data;
    })
  }

  onLike(name:string, id:number){
    return this.dataService.putLikeReply(name, id, null);
  }
  
}

import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ITag } from '../../models/ITag';

@Component({
  selector: 'app-tweet',
  imports: [NavbarComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css'
})
export class TweetComponent {
  
  tweetForm:FormGroup;
  myToken:any;
  mySet: Set<ITag> = new Set();
  input:any;

  constructor(private formBuilder: FormBuilder,
    private dataService:DataService, private router: Router, private authService: AuthService){
      this.tweetForm = this.formBuilder.group({
        content:[null, [Validators.required]],
        tags: ['']
      });
      this.myToken = authService.decodeToken();
  }

  

  get content(){
    return this.tweetForm.get('content');
  }

  get tags(){
    return this.tweetForm.get('tags');
  }

  onSubmitHandler(){
    const inputArray = this.tweetForm.get('tags')?.value.split(' ').map((item: string) => {tag:item});
    this.mySet = new Set(inputArray);
    this.input = {
      content: this.tweetForm.get('content'),
      tags: this.mySet
    }
    return this.dataService.postTweet(this.myToken, this.input.value).subscribe((data)=>{
      this.router.navigateByUrl('/');
    })
  }

}

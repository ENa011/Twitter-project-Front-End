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

  input:any;

  constructor(private formBuilder: FormBuilder,
    private dataService:DataService, private router: Router, private authService: AuthService){
      this.tweetForm = this.formBuilder.group({
        content:[null, [Validators.required]],
        tags: []
      });
      this.myToken = authService.decodeToken();
  }

  private stringToTagObjects(inputString: string): { tag: string }[] {
    if(inputString != null){
    const words = inputString.split(' ');
    return words.map(word => ({ tag: word }));
    } else return [];
  }

  get content(){
    return this.tweetForm.get('content');
  }

  get tags(){
    return this.tweetForm.get('tags');
  }

  onSubmitHandler(){
    
    const tagObjects = this.stringToTagObjects(this.tweetForm.get('tags')?.value);
    
    this.tweetForm.patchValue({tags: tagObjects})
    return this.dataService.postTweet(this.myToken, this.tweetForm.value).subscribe((data)=>{
      this.router.navigateByUrl('/');
    })
  }

}

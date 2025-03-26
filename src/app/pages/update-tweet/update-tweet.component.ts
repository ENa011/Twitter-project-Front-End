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
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-tweet',
  imports: [NavbarComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-tweet.component.html',
  styleUrl: './update-tweet.component.css'
})
export class UpdateTweetComponent {
    updateForm:FormGroup;
    myToken:any;
    user:any;
    id:any;

    constructor(private formBuilder: FormBuilder,
      private dataService:DataService, private router: Router, private authService: AuthService, private activateRoute:ActivatedRoute){
        this.user = this.activateRoute.snapshot.paramMap.get('user');
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.updateForm = this.formBuilder.group({
          content:[null, [Validators.required]],
        });
        this.myToken = authService.decodeToken();
    }
  
    
  
    get content(){
      return this.updateForm.get('content');
    }

    onSubmitHandler(){
      return this.dataService.updateTweet(this.user, this.id, this.updateForm.value).subscribe((data)=>{
        this.router.navigateByUrl('/');
      })
    }
  
}

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
import { ITag } from '../../models/ITag';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reply',
  imports: [NavbarComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reply.component.html',
  styleUrl: './reply.component.css'
})
export class ReplyComponent {

  replyForm:FormGroup;
  mySet: Set<ITag> = new Set();
  input:any;
  user:any;
  id:any;
  myToken:any;

  constructor(private formBuilder: FormBuilder,
    private dataService:DataService, private router: Router, private activateRoute: ActivatedRoute, private authService: AuthService){
      this.user = this.activateRoute.snapshot.paramMap.get('user');
      this.id = this.activateRoute.snapshot.paramMap.get('id');
      this.replyForm = this.formBuilder.group({
        reply:[null, [Validators.required]],
        tags: ['']
      });
      this.myToken = authService.decodeToken();
  }
  

  get reply(){
    return this.replyForm.get('reply');
  }

  get tags(){
    return this.replyForm.get('tags');
  }

  onSubmitHandler(){
    const inputArray = this.replyForm.get('tags')?.value.split(' ').map((item: string) => {tag:item});
    this.mySet = new Set(inputArray);
    this.input = {
      content: this.replyForm.get('reply'),
      tags: this.mySet
    }
    return this.dataService.postReply(this.user, this.id, this.input.value).subscribe((data)=>{
      this.router.navigateByUrl('/');
    })
  }
  
}

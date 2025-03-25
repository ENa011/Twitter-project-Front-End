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

@Component({
  selector: 'app-reply',
  imports: [NavbarComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './reply.component.html',
  styleUrl: './reply.component.css'
})
export class ReplyComponent {

  replyForm:FormGroup;
  myToken = JSON.parse(JSON.stringify(localStorage.getItem('token')));

  constructor(private formBuilder: FormBuilder,
    private dataService:DataService, private router: Router){
      this.replyForm = this.formBuilder.group({
        content:[null, [Validators.required]],
        Liked: [],
        tags: []
      });
  }

  get content(){
    return this.replyForm.get('content');
  }

  get tags(){
    return this.replyForm.get('tags');
  }

  getLiked(){
    return this.replyForm.get('Liked');
  }

  onSubmitHandler(){

  }
}

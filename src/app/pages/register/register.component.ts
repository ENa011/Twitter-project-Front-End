import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IUser } from '../../models/IUser';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private dataService: DataService, private router:Router){
  }
  responseText ='';
  alertClass='';
 userModel:IUser={
 }

 onSubmitHandler(){
    return this.dataService.postRegister(this.userModel).subscribe((data) =>{
      this.responseText = 'register Successful';
      this.alertClass = 'alert alert-success';
      console.log(status);
      this.router.navigateByUrl('/login');
    },
  (error)=>{
    this.responseText = 'register not successful';
      this.alertClass = 'alert alert-danger';
      console.log(error);
  }
  )
 }

}

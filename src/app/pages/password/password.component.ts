import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DataService } from '../../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-password',
  imports: [NavbarComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {

  responseText ='';
  alertClass='';

  passwordForm: FormGroup;

  constructor(private dataService: DataService,private formBuilder: FormBuilder){
    this.passwordForm = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  get password(){
    return this.passwordForm.get('password');
  }

  onSubmitHandler(){

    let token = localStorage.getItem('token');
    console.log(this.passwordForm.value);
        if(token){
          try {
            const decodedToken = jwtDecode(token);
              this.dataService.postPassword(decodedToken.sub, this.passwordForm.value).subscribe((data)=>{
              this.responseText = 'password changed successfully';
              this.alertClass = 'alert alert-success';
            },
            (error) =>{
              console.log(error);
              this.responseText = 'password changed unsuccessfully';
              this.alertClass = 'alert alert-danger';
            }
          );
          } catch (error) {
            console.error('Invalid token:', error);
          }
        } else {
            console.warn('No token found in local storage');
        }
    }
  
}

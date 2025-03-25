import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule, } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  responseText ='';
  alertClass='';

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService, private router: Router){
      this.loginForm = this.formBuilder.group({
        usernameOrEmail:[null, [Validators.required]],
        password: [null, [Validators.required]]
      });
    }

    get usernameOrEmail(){
      return this.loginForm.get('usernameOrEmail');
    }
  
    get password(){
      return this.loginForm.get('password');
    }
  
    onSubmitHandler(){
      this.authService.getAuth(this.loginForm.value).subscribe((data) =>{
        this.responseText = 'login Successful';
        this.alertClass = 'alert alert-success';
        
        localStorage.setItem('token', data);
  
        this.router.navigateByUrl('/');
      },
      (error) =>{
          this.responseText = 'login not successful';
          this.alertClass = 'alert alert-danger';
        }
      );
    }

}

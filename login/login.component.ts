import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  
  loginForm!: FormGroup; 
  errorMessage!: string;

  constructor(private router: Router, private authService : AuthService, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });  
  }

  redirectToInscription() {
  this.router.navigate(['/create-account'], { replaceUrl: true });
  }

  redirectToForgotPassword(){
    this.router.navigate(['/forgot-password'], { replaceUrl: true });
  }

  redirectToDashboard(){
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      res => {
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
      }
    );
  }
  
}
  


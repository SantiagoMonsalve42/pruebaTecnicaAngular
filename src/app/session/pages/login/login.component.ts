import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { AlertsService } from 'src/app/comun/services/alerts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private sessionService: SessionService,
            private router: Router) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          )
        ]
      ]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.login();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  login(): void {
      this.sessionService.login({
              username: this.loginForm.get('email')?.value,
              password: this.loginForm.get('password')?.value,
          }).subscribe({next: (response) => {
            this.sessionService.setToken(response.data.token);
            AlertsService.SuccessAlert("Login", "Login Correcto");
            this.loginForm.reset();
            this.router.navigate(['/core']); 
      },
      error: (error) => {
        AlertsService.ErrorAlert("Error",error?.error?.error ?? error.message);
      },
      complete: () => {
        console.log("Request completed");
      }});
    }
}

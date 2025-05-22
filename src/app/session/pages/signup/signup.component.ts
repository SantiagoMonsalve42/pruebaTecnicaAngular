import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { ISignupRequest } from '../../interfaces/session.interfaces';
import { AlertsService } from 'src/app/comun/services/alerts.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
              private sessionService: SessionService) { // Removed unused imports
    this.signupForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
          ]
        ],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.signup();
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
  signup(): void {
    this.sessionService.registro({
            apellido: this.signupForm.get('lastName')?.value,
            contraseña: this.signupForm.get('password')?.value,
            email: this.signupForm.get('email')?.value,
            nombre: this.signupForm.get('firstName')?.value,
        }).subscribe({next: (response) => {
          AlertsService.SuccessAlert("EXCELENTE",response.data);
          this.signupForm.reset();
    },
    error: (error) => {
      AlertsService.ErrorAlert("Error",error?.error?.error ?? error.message);
    },
    complete: () => {
      console.log("Request completed");
    }});
  }
}

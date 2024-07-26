import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',

  standalone: true,
  imports: [
    MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  errorMsg: string = ""

  constructor(private router: Router){}

  submit() {
    if (this.form.valid) {
      if (this.form.value.username === 'leny' && this.form.value.password === '1234') {
        localStorage.setItem('auth', 'yes')
        this.router.navigate(['/productos'])
      } else {
        this.errorMsg = "Usuario o contraseña no valida"
      }
    }
  }
}

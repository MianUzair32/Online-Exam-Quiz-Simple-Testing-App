import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { get } from 'node:http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registerForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
    institute: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  constructor(private router: Router) {

  }
  userRegister() {
    console.log(this.registerForm.value);
  let mail = this.registerForm.value.email ?? '';
  let pass = this.registerForm.value.password ?? '';
    localStorage.setItem("Email", mail)
    localStorage.setItem("Password", pass)
    // this.router.navigate(['/about']);
    alert('You are register successfully & Please Login!')
  }
  // use getter
  get user() {
    return this.registerForm.get('user')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get number() {
    return this.registerForm.get('number')
  }
  get institute() {
    return this.registerForm.get('institute')
  }
  get password() {
    return this.registerForm.get('password')
  }


  Login() {
    this.router.navigate(['/userlogin']);
  }
}

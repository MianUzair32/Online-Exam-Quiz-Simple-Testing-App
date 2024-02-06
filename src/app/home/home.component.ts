import { Component ,OnInit} from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { get } from 'node:http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  registerForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
    institute: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  constructor(private router: Router , public serviceService: ServiceService) {

  }
  ngOnInit(){
    this.serviceService.username='';
  }
  userRegister() {
    console.log(this.registerForm.value);
  let mail = this.registerForm.value.email ?? '';
  let pass = this.registerForm.value.password ?? '';
  let name = this.registerForm.value.user ?? '';

    localStorage.setItem("Email", mail)
    localStorage.setItem("Password", pass)
    localStorage.setItem("Name", name)
    location.reload();
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

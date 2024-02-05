import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

class Model {
  email: string = '';
  password: any = null;

}
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  admin = new Model();
  userName: string = '';
  constructor(private router: Router,public serviceService: ServiceService){ }
  //  email: string='';
  //  password: any='';
  userLogin(item: any){
  //   if (this.email === 'uzairmian395@gmail.com' && this.password === 123) {
  //   this.router.navigate(['user-dash/dashboard']);
  //   console.log(item);
  // } else {
  //   alert('Login failed');
  // }
  let mail = localStorage.getItem("Email");
  let pass = localStorage.getItem("Password");
  let name = localStorage.getItem('Name');
  this.userName = name || '';
  if(this.admin.email == mail && this.admin.password == pass){
    localStorage.setItem('Email', this.admin.email);
  localStorage.setItem('Password', this.admin.password);

   // Store the name in local storage

  this.router.navigate(['user-dash/dashboard']);
}
else{
  alert('login failed')
}
 }
}

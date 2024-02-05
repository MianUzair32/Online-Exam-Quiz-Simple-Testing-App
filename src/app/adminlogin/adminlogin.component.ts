import { Component } from '@angular/core';
import { Router } from '@angular/router';
class Model {
  email: string = '';
  password: any = null;

}
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'] // Use styleUrls instead of styleUrl
})
export class AdminloginComponent {
  admin = new Model();
  constructor(private router: Router) { }
  // login:boolean=false;
  AdminForm() {
    // if (this.admin.email == 'uzairmian395@gmail.com' && this.admin.password == 123) {
    //   this.router.navigate(['admin-dash/dashboard']);
    //   console.log(item);
    // } else {
    //   alert('Login failed');
    // }

    // let mail = localStorage.getItem("Email");
    // let pass = localStorage.getItem("Password");
    // if(this.admin.email == mail && this.admin.password == pass){
    // localStorage.setItem('Email', this.admin.email);
    // localStorage.setItem('Password', this.admin.password);
    if(this.admin.email == 'uzairmian395@gmail.com' && this.admin.password =='123'){
      this.router.navigate(['admin-dash/dashboard']);
    }
    else{
      alert('login failed')
    }
  }
 
}

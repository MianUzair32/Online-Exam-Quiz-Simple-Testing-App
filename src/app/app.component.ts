import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Testing-App';
  adminNav:boolean=false;
constructor(private router: Router)
{}
  ngOnInit(){
    //  this.router.events.subscribe((val =>{
    //   console.log(val)
    // }))
   
    // if( ){

    // }
    const isLoggedInAsAdmin = true;

    this.adminNav = isLoggedInAsAdmin;
  }
}

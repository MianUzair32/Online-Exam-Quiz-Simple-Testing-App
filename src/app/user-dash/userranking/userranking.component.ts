import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userranking',
  templateUrl: './userranking.component.html',
  styleUrl: './userranking.component.css'
})
export class UserrankingComponent {
  constructor(private router: Router) { }
  signout(){
    this.router.navigate(['/home']);
  }
}

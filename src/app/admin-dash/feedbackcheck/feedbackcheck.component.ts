import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbackcheck',
  templateUrl: './feedbackcheck.component.html',
  styleUrl: './feedbackcheck.component.css'
})
export class FeedbackcheckComponent {
  constructor(private router: Router) { }
  signout(){
    this.router.navigate(['/home']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  constructor(private router: Router) { }
  signout(){
    this.router.navigate(['/home']);
  }
}

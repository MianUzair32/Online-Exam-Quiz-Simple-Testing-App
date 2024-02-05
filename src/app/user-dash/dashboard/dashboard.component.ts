import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router,
    public serviceService: ServiceService) { }
  ngOnInit(){
    this.serviceService.username = "Hello" +" " +localStorage.getItem("Name")  ?? '';
    // localStorage.clear();
  }
  signout(){
    this.router.navigate(['/home']);
  }
}

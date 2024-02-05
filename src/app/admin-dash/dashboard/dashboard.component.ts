import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router,
    public serviceService: ServiceService) { }
  ngOnInit() {
    this.serviceService.nav = true;
    // if (this.router.url == '/admin-dash/dashboard') {
    // }
  }
  signout() {
    this.router.navigate(['/home']);
  }
}

// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public serviceService: ServiceService) { }
  adminNav: any = 'Admin-Dashboard';
  ngOnInit() {
    this.serviceService.username = '';
    this.serviceService.nav = true;
    this.serviceService.isAdminPage=true;
    this.serviceService.isUserPage=true;
    // Subscribe to router events to update navigation visibility
    this.router.events.pipe(
      filter((event: any | null): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateNavVisibility(event.url);
    });
    // this.serviceService.isAdminPage = true;
  }

  adminLogin() {
    // Store admin status in local storage
    this.router.navigate(['/adminlogin']);
  }

  // Update navigation visibility based on the current route
  updateNavVisibility(url: string) {
    this.serviceService.isAdminPage = url.includes('/admin-dash/dashboard') || url.includes('/admin-dash/user')
      || url.includes('/admin-dash/feedback') || url.includes('/admin-dash/ranking') 
      || url.includes('/admin-dash/Create-Quiz');

      this.serviceService.isUserPage = url.includes('/user-dash/dashboard') || url.includes('/user-dash/history')
       || url.includes('/user-dash/userranking') || url.includes('/user-dash/userfeedback'); 
   



  }
}

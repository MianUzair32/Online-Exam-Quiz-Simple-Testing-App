import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing-App';
  Navbar: boolean = false;

  constructor(public route: Router,
    public serviceService: ServiceService) {
    console.log(`Path ${this.route.url}`);
   }

  ngOnInit() {

}
}

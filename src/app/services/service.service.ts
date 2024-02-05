// service.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  nav: boolean = false;
  isAdminPage: boolean = false;
  isUserPage:boolean =  false;
  username: string = '';
  
  }
 
  


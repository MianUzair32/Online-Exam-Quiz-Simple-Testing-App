import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
  
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:'userlogin',
    component:UserloginComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },
 
   {path: "", redirectTo: "home", pathMatch: "full"},

  {
    path: 'admin-dash',
    loadChildren: () => import('./admin-dash/admin-dash.module').then(mod => mod.AdminDashModule)
  },
  {
    path: 'user-dash',
    loadChildren: () => import('./user-dash/user-dash.module').then(mod => mod.UserDashModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

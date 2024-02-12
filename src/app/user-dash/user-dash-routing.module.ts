import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserfeedbackComponent } from './userfeedback/userfeedback.component';
import { UserrankingComponent } from './userranking/userranking.component';
import { McqsTestComponent } from './mcqs-test/mcqs-test.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'history',component:UserComponent},
  {path:'userfeedback',component:UserfeedbackComponent},
  {path:'userranking',component:UserrankingComponent},
  {path:'mcqstest',component:McqsTestComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashRoutingModule { }

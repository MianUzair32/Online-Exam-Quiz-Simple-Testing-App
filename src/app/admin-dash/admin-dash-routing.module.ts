import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { FeedbackcheckComponent } from './feedbackcheck/feedbackcheck.component';
import { RankingComponent } from './ranking/ranking.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'user',component:UserComponent},
  {path:'feedback',component:FeedbackcheckComponent},
  {path:'ranking',component:RankingComponent},
  {path:'Create-Quiz',component:CreateQuizComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashRoutingModule { }

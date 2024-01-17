import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashRoutingModule } from './admin-dash-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { FeedbackcheckComponent } from './feedbackcheck/feedbackcheck.component';
import { RankingComponent } from './ranking/ranking.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    AdminnavComponent,
    FeedbackcheckComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    AdminDashRoutingModule,
    FormsModule
  ],
  exports:[
  ]
})
export class AdminDashModule { }

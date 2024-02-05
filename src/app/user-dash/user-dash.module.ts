import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashRoutingModule } from './user-dash-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserfeedbackComponent } from './userfeedback/userfeedback.component';
import { UserrankingComponent } from './userranking/userranking.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    UserfeedbackComponent,
    UserrankingComponent
  ],
  imports: [
    CommonModule,
    UserDashRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class UserDashModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/schedule-form', pathMatch: 'full' },
  { path: 'schedule-form', component: ScheduleFormComponent },
  { path: 'schedule-details', component: ScheduleDetailsComponent },
  // { path: 'schedule-details/:id', component: ScheduleDetailsComponent },
  // { path: 'schedule-edit/:id', component: ScheduleEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignalrComponent } from './signalr/signalr.component';
import { ConferenceScheduleComponent } from './conference-schedule/conference-schedule.component';

const routes: Routes = [
  { path: 'signalr', component: SignalrComponent },
  { path: 'conference-schedule', component: ConferenceScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

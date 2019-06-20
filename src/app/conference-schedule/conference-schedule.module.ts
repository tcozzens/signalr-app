import { ConferenceScheduleService } from './conference-schedule.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceScheduleComponent } from './conference-schedule.component';

@NgModule({
  declarations: [
    ConferenceScheduleComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ConferenceScheduleService
  ]
})
export class ConferenceScheduleModule { }

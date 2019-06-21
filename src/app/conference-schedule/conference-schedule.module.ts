import { CustomMaterialsModule } from './../custom-materials.module';
import { ConferenceScheduleService } from './conference-schedule.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceScheduleComponent } from './conference-schedule.component';

@NgModule({
  declarations: [
    ConferenceScheduleComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialsModule
  ],
  providers: [
    ConferenceScheduleService
  ]
})
export class ConferenceScheduleModule { }

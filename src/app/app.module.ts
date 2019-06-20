import { ConferenceScheduleModule } from './conference-schedule/conference-schedule.module';
import { SignalrModule } from './signalr/signalr.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialsModule } from './custom-materials.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialsModule,
    SignalrModule,
    ConferenceScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

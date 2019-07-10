import { CustomMaterialsModule } from './../custom-materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalrComponent } from './signalr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignalRService } from './signalr.service';

@NgModule({
  declarations: [SignalrComponent],
  imports: [
    CommonModule,
    CustomMaterialsModule,
    ReactiveFormsModule
  ],
  providers: [
    SignalRService
  ]
})
export class SignalrModule { }

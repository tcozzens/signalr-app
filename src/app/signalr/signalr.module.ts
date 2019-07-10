import { CustomMaterialsModule } from './../custom-materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalrComponent } from './signalr.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignalrComponent],
  imports: [
    CommonModule,
    CustomMaterialsModule,
    ReactiveFormsModule
  ]
})
export class SignalrModule { }

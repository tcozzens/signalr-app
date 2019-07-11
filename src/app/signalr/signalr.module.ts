import { CustomMaterialsModule } from './../custom-materials.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalrComponent } from './signalr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignalRService } from './signalr.service';
import { NgLetDirective } from './ng-let.directive';

@NgModule({
  declarations: [SignalrComponent, NgLetDirective],
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

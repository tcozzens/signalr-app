import { NgModule } from '@angular/core';
import {
  MatSnackBarModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule,
  MatCheckboxModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSnackBarModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatGridListModule
  ],
  exports: [
    MatSnackBarModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatGridListModule
  ]
})
export class CustomMaterialsModule { }

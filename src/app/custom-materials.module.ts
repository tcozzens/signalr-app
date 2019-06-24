import { NgModule } from '@angular/core';
import {
  MatSnackBarModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule,
  MatCheckboxModule, MatGridListModule, MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSnackBarModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatGridListModule, MatCardModule
  ],
  exports: [
    MatSnackBarModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatGridListModule, MatCardModule
  ]
})
export class CustomMaterialsModule { }

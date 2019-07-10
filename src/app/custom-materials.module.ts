import { NgModule } from '@angular/core';
import {
  MatSnackBarModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule,
  MatCheckboxModule, MatGridListModule, MatCardModule,
  MatInputModule, MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSnackBarModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatGridListModule, MatCardModule,
    MatInputModule, MatButtonModule
  ],
  exports: [
    MatSnackBarModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatGridListModule, MatCardModule,
    MatInputModule, MatButtonModule
  ]
})
export class CustomMaterialsModule { }

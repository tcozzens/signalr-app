import { NgModule } from '@angular/core';
import {
  MatSnackBarModule, MatToolbarModule, MatIconModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule,
  MatCheckboxModule, MatGridListModule, MatCardModule,
  MatInputModule, MatButtonModule, MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSnackBarModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatGridListModule, MatCardModule,
    MatInputModule, MatButtonModule, MatTableModule
  ],
  exports: [
    MatSnackBarModule, MatToolbarModule, MatIconModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatCheckboxModule, MatGridListModule, MatCardModule,
    MatInputModule, MatButtonModule, MatTableModule
  ]
})
export class CustomMaterialsModule { }

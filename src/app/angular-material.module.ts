import { NgModule } from '@angular/core';

import {
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBadgeModule
} from '@angular/material';


@NgModule({
    imports: [MatCardModule, MatButtonModule, MatDialogModule, MatSelectModule, MatBadgeModule, MatInputModule, MatTooltipModule, MatIconModule, MatSnackBarModule, MatFormFieldModule, MatToolbarModule, MatDividerModule, MatListModule],
    exports: [MatCardModule, MatButtonModule, MatDialogModule, MatSelectModule, MatBadgeModule, MatInputModule, MatTooltipModule, MatIconModule, MatSnackBarModule, MatFormFieldModule, MatToolbarModule, MatDividerModule, MatListModule],
    declarations: []
})
export class AngularMaterialModule { 
    
}

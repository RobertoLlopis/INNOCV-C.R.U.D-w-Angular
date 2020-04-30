import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatInputModule,
		MatCardModule,
		MatExpansionModule,
		MatGridListModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatDialogModule,
		MatMenuModule,
		MatIconModule
	]
})
export class AngularMaterialModule {}

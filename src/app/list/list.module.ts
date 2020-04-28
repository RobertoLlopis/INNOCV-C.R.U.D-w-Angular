import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListDisplayComponent } from './list-display/list-display.component';

@NgModule({
	imports: [
		CommonModule,
		AngularMaterialModule,
		ListRoutingModule
	],
	exports: [],
	declarations: [
		ListComponent,
		ListDisplayComponent
	],
	providers: []
})
export class ListModule {}

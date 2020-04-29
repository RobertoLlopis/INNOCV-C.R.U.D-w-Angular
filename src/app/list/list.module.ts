import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { FormsModule } from '@angular/forms';
import { UsersFilterPipeDisplay } from '../pipes/user.filter.pipe';

@NgModule({
	imports: [
		CommonModule,
		AngularMaterialModule,
		ListRoutingModule,
		FormsModule
	],
	exports: [
		UsersFilterPipeDisplay
	],
	declarations: [
		ListComponent,
		ListDisplayComponent,
		UsersFilterPipeDisplay
	],
	providers: [
		UsersFilterPipeDisplay
	]
})
export class ListModule {}

import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditionRoutingModule } from './edition-routing.module';
import { EditionComponent } from './edition.component';
import { EditionListComponent } from './edition-list/edition-list.component';
import { CreateUserComponent } from './edition-create-user/edition-create-user.component';

@NgModule({
	imports: [
		CommonModule,
		AngularMaterialModule,
		EditionRoutingModule,
		FormsModule
	],
	exports: [],
	declarations: [
		EditionComponent,
		EditionListComponent,
		CreateUserComponent
	],
	providers: []
})
export class EditionModule {}

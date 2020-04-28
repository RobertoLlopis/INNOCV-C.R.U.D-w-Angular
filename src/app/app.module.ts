import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header/app-header.component';
import { CreateUserComponent } from './edition/edition-create-user/edition-create-user.component';
import { EditionListComponent } from './edition/edition-list/edition-list.component';
import { ListDisplayComponent } from './list/list-display/list-display.component';

@NgModule({
	declarations: [
		AppComponent,
		AppHeader,
		CreateUserComponent,
		routingComponents,
		EditionListComponent,
		ListDisplayComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularMaterialModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}

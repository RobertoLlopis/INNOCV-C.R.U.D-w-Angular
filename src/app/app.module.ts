import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header/app-header.component';
import { ListModule } from './list/list.module';
import { EditionModule } from './edition/edition.module';

@NgModule({
	declarations: [
		AppComponent,
		AppHeader,
		routingComponents
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularMaterialModule,
		HttpClientModule,
		ListModule,
		EditionModule,
		BrowserAnimationsModule,
		FormsModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}

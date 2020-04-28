import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './header/app-header.component';
import { ListModule } from './list/list.module';

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
		FormsModule,
		HttpClientModule,
		ListModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}

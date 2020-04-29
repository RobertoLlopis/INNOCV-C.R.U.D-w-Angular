import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './commonFeatures/angular-material.module';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeader } from './Components/header/app-header.component';
import { ListModule } from './components/list/list.module';
import { EditionModule } from './components/edition/edition.module';
import { ErrorInterceptor } from './commonFeatures/error/error-interceptor';
import { ErrorComponent } from './commonFeatures/error/error.component';

@NgModule({
	declarations: [
		AppComponent,
		AppHeader,
		routingComponents,
		ErrorComponent
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
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
	],
	exports: [],
	bootstrap: [
		AppComponent
	],
	entryComponents: [
		ErrorComponent
	]
})
export class AppModule {}

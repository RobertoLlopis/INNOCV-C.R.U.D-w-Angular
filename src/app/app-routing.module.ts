import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
	{ path: '', component: WelcomeComponent, data: { num: 1 } },
	{ path: 'list', loadChildren: './components/list/list.module#ListModule' },
	{
		path: 'edition',
		loadChildren: './components/edition/edition.module#EditionModule'
	}
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
export const routingComponents = [
	WelcomeComponent
];

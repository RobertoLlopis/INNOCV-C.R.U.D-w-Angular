import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';

export const routes: Routes = [
	{ path: 'list/display', component: ListComponent }
];
@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class ListRoutingModule {}

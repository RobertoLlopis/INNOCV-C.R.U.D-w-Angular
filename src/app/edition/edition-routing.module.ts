import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EditionComponent } from './edition.component';

export const routes: Routes = [
	{ path: 'edition/display', component: EditionComponent, data: { num: 3 } },
	{ path: 'edition/:userId', component: EditionComponent, data: { num: 4 } }
];
@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class EditionRoutingModule {}

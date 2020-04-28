import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditionComponent } from './edition/edition.component';
import { ListComponent } from './list/list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'edition', component: EditionComponent },
  { path: 'edition/:userId', component: EditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  EditionComponent,
  ListComponent,
  WelcomeComponent,
];

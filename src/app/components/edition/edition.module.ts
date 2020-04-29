import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../commonFeatures/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditionRoutingModule } from './edition-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { UsersFilterPipeEdition } from '../../commonFeatures/pipes/user.filter.pipe';

import { EditionComponent } from './edition.component';
import { EditionListComponent } from './edition-list/edition-list.component';
import { CreateUserComponent } from './edition-create-user/edition-create-user.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    EditionRoutingModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [UsersFilterPipeEdition],
  declarations: [
    EditionComponent,
    EditionListComponent,
    CreateUserComponent,
    UsersFilterPipeEdition,
  ],
  providers: [UsersFilterPipeEdition],
})
export class EditionModule {}

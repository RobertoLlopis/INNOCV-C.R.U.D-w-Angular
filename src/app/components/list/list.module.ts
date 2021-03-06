import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../../commonFeatures/angular-material.module';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UsersFilterPipeDisplay } from '../../commonFeatures/pipes/user.filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    ListRoutingModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [UsersFilterPipeDisplay],
  declarations: [ListComponent, ListDisplayComponent, UsersFilterPipeDisplay],
  providers: [UsersFilterPipeDisplay],
})
export class ListModule {}

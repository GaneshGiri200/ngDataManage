import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    DashboardComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class CoursesModule { }

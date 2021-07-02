import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardComponent} from './card/card.component';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, children:[
    {path:'', component:CardComponent},
    {path:'card', component:CardComponent},
    {path:'list', component:ListComponent}
  ]},

  {path:'dashboard', component:DashboardComponent, children:[
    {path:'', component:CardComponent},
    {path:'card', component:CardComponent},
    {path:'list', component:ListComponent}
  ]},

  {path:'edit/:id', component:EditComponent},
  {path:'add', component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

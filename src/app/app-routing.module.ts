import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PnfComponent} from './pnf/pnf.component';
import {LoginComponent} from'./login/login.component';
import {AuthGuard} from'./shared/Authentication/auth.guard';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'students', loadChildren:()=> import('./students/students.module').then((m)=>m.StudentsModule),canActivate:[AuthGuard]},
  {path:'courses', loadChildren:()=> import('./courses/courses.module').then((m)=>m.CoursesModule),canActivate:[AuthGuard]},
  {path:'lighthouse', loadChildren:()=> import('./lighthouse/lighthouse.module').then((m)=>m.LighthouseModule),canActivate:[AuthGuard]},
  {path:'**', component:PnfComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

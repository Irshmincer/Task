import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'userpage', component: UserpageComponent } ,
  {path:'userdetail', component: UserdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

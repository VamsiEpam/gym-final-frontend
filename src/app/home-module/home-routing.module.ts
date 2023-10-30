import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {JoinUsComponent} from "./join-us/join-us.component";

const routes: Routes = [
  {
    path: "",
    component:HomePageComponent
  },
  {
    path:"join-us",
    component:JoinUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

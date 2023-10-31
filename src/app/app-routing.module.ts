import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FourNotFourComponent} from "./four-not-four/four-not-four.component";
import {traineeGuard} from "./shared/trainee.guard";
import {trainerGuard} from "./shared/trainer.guard";

const routes: Routes = [


  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path : "home",
    loadChildren:() =>
      import('src/app/home-module/home.module').then((m) => m.HomeModule)
  },
  {
    path:"user",
    loadChildren:() =>
      import('src/app/user-module/user.module').then((m) => m.UserModule)
  },
  {
    path:"trainee",
    canActivate:[traineeGuard],
    loadChildren:() =>
      import('src/app/trainee-module/trainee.module').then((m) => m.TraineeModule)
  },
  {
    path:"trainer",
    canActivate:[trainerGuard],
    loadChildren:() =>
      import('src/app/trainer-module/trainer.module').then((m) => m.TrainerModule)
  },
  {
    path:"404",
    component : FourNotFourComponent
  },
  {
    path : "**",
    redirectTo : '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {JoinUsComponent} from "../home-module/join-us/join-us.component";
import {PasswordUpdateComponent} from "./password-update/password-update.component";
import {TraineeRegistrationComponent} from "./trainee-registration/trainee-registration.component";
import {TrainerRegistrationComponent} from "./trainer-registration/trainer-registration.component";
import {HomePageComponent} from "../home-module/home-page/home-page.component";

const routes: Routes = [
  // {
  //   path: "",
  //   component:HomePageComponent
  // },
  {
    path : "sign-in",
    component : SignInComponent
  },
  {
    path : "join-us",
    component : JoinUsComponent
  },
  {
    path : "update-password",
    component : PasswordUpdateComponent
  },
  {
    path : "register-trainee",
    component : TraineeRegistrationComponent
  },
  {
    path:"register-trainer",
    component : TrainerRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

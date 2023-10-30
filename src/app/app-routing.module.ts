import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FourNotFourComponent} from "./four-not-four/four-not-four.component";

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
  // {
  //   path: "home",
  //   component: HomePageComponent
  // },
  // {
  //   path: "sign-in",
  //   component: SignInComponent
  // },
  {
    path:"user",
    loadChildren:() =>
      import('src/app/user-module/user.module').then((m) => m.UserModule)
  },
  // {
  //   path: "join-us",
  //   component: JoinUsComponent
  // },
  // {
  //   path: "trainer-registration",
  //   component: TrainerRegistrationComponent
  // },
  // {
  //   path: "trainee-registration",
  //   component: TraineeRegistrationComponent
  // },
  {
    path:"trainee",
    loadChildren:() =>
      import('src/app/trainee-module/trainee.module').then((m) => m.TraineeModule)
  },
  // {
  //   path: "trainee-account",
  //   component: MyaccountStudentProfileComponent
  // },
  // {
  //   path:"edit-password",
  //   component: PasswordUpdateComponent
  // },
  // {
  //   path:"edit-trainers",
  //   component: EditTrainersComponent
  // },
  // {
  //   path:"edit-trainee-profile",
  //   component:UpdateTraineeComponent
  // },
  // {
  //   path:"trainee-trainings-display",
  //   component:TraineeTrainingsDisplayComponent
  // },
  {
    path:"trainer",
    loadChildren:() =>
      import('src/app/trainer-module/trainer.module').then((m) => m.TrainerModule)
  },
  // {
  //   path: "trainer-account",
  //   component: MyaccountTrainerProfileComponent
  // },
  // {
  //   path:"edit-trainer-profile",
  //   component:UpdateTrainerComponent
  // },
  // {
  //   path:"add-training",
  //   component:TrainingComponent
  // },
  //
  // {
  //   path:"trainer-trainings-display",
  //   component:TrainerTrainingsDisplayComponent
  // },
  {
    path : "**",
    component : FourNotFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


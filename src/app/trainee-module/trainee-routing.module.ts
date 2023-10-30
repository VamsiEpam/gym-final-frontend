import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyaccountStudentProfileComponent} from "./myaccount-student-profile/myaccount-student-profile.component";
import {EditTrainersComponent} from "./edit-trainers/edit-trainers.component";
import {TraineeTrainingsDisplayComponent} from "./trainee-trainings-display/trainee-trainings-display.component";
import {UpdateTraineeComponent} from "./update-trainee/update-trainee.component";

const routes: Routes = [

  {
    path: "",
    component:MyaccountStudentProfileComponent
  },
  {
    path : "edit-trainers",
    component : EditTrainersComponent
  },
  {
    path : "trainings-display",
    component : TraineeTrainingsDisplayComponent
  },
  {
    path : "edit-profile",
    component : UpdateTraineeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraineeRoutingModule { }

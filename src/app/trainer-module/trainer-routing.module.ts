import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyaccountTrainerProfileComponent} from "./myaccount-trainer-profile/myaccount-trainer-profile.component";
import {TrainerTrainingsDisplayComponent} from "./trainer-trainings-display/trainer-trainings-display.component";
import {UpdateTrainerComponent} from "./update-trainer/update-trainer.component";
import {TrainingComponent} from "./training/training.component";

const routes: Routes = [

  {
    path: "",
    component:MyaccountTrainerProfileComponent
  },
  {
    path:"add-training",
    component:TrainingComponent
  },
  {
    path : "trainings-display",
    component : TrainerTrainingsDisplayComponent
  },
  {
    path : "edit-profile",
    component : UpdateTrainerComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }

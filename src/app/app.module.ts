import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './user-module/sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TrainerRegistrationComponent } from './user-module/trainer-registration/trainer-registration.component';
import { TraineeRegistrationComponent } from './user-module/trainee-registration/trainee-registration.component';
import { NavbarComponent } from './user-module/signup-navbar/navbar.component';
import { JoinUsComponent } from './home-module/join-us/join-us.component';
import { FooterComponent } from './footer/footer.component';
import { PasswordUpdateComponent } from './user-module/password-update/password-update.component';
import { UpdateTrainerComponent } from './trainer-module/update-trainer/update-trainer.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { UpdateTraineeComponent } from './trainee-module/update-trainee/update-trainee.component';
import { TrainingComponent } from './trainer-module/training/training.component';
import { HomePageComponent } from './home-module/home-page/home-page.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { MyaccountTrainerProfileComponent } from './trainer-module/myaccount-trainer-profile/myaccount-trainer-profile.component';
import { MyaccountStudentProfileComponent } from './trainee-module/myaccount-student-profile/myaccount-student-profile.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatRadioModule} from "@angular/material/radio";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { FourNotFourComponent } from './four-not-four/four-not-four.component';
import { EditTrainersComponent } from './trainee-module/edit-trainers/edit-trainers.component';
import { TrainerNavbarComponent } from './trainer-module/trainer-navbar/trainer-navbar.component';
import { TraineeNavbarComponent } from './trainee-module/trainee-navbar/trainee-navbar.component';
import { DialogBoxComponent } from './user-module/dialog-box/dialog-box.component';
import { CursorHoverDirective } from './cursor-hover.directive';
import { HomeNavbarComponent } from './home-module/homepage-navbar/home-navbar.component';
import {MatSliderModule} from "@angular/material/slider";
import { TraineeTrainingRequestBoxComponent } from './trainee-module/trainee-training-request-box/trainee-training-request-box.component';
import { TrainerTrainingRequestBoxComponent } from './trainer-module/trainer-training-request-box/trainer-training-request-box.component';
import { TraineeTrainingsDisplayComponent } from './trainee-module/trainee-trainings-display/trainee-trainings-display.component';
import { TrainerTrainingsDisplayComponent } from './trainer-module/trainer-trainings-display/trainer-trainings-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    TrainerRegistrationComponent,
    TrainerRegistrationComponent,
    TraineeRegistrationComponent,
    NavbarComponent,
    JoinUsComponent,
    FooterComponent,
    PasswordUpdateComponent,
    UpdateTrainerComponent,
    UpdateTraineeComponent,
    TrainingComponent,
    HomePageComponent,
    MyaccountTrainerProfileComponent,
    MyaccountStudentProfileComponent,
    FourNotFourComponent,
    EditTrainersComponent,
    TrainerNavbarComponent,
    TraineeNavbarComponent,
    DialogBoxComponent,
    CursorHoverDirective,
    HomeNavbarComponent,
    TraineeTrainingRequestBoxComponent,
    TrainerTrainingRequestBoxComponent,
    TraineeTrainingsDisplayComponent,
    TrainerTrainingsDisplayComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    NgOptimizedImage,
    MatTableModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSlideToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import {Trainee} from "../../model/Trainee";
import {ActivatedRoute, Router} from "@angular/router";
import {TraineeDetailsDTO} from "../../dto/TraineeDetailsDTO";
import {UserProfileService} from "../../shared/user-profile.service";
export interface TrainerInfo {
  firstname: string;
  lastname : string;
  specialization: string;
}

@Component({
  selector: 'app-myaccount-student-profile',
  templateUrl: './myaccount-student-profile.component.html',
  styleUrls: ['./myaccount-student-profile.component.css']
})
export class MyaccountStudentProfileComponent {
  displayedColumns: string[] = ['firstname', 'lastname', 'specialization'];
  dataSource: TrainerInfo[] = [];

  traineeProfile: TraineeDetailsDTO = new TraineeDetailsDTO(); // Define the variable to hold the profile data

  constructor(private route: ActivatedRoute, private router: Router, private userService : UserProfileService) {
  }

  ngOnInit() {
    const state = window.history.state;
    this.traineeProfile = state.traineeProfile;
    console.log("we are inside my profile component " + this.traineeProfile);
    this.userService.setTraineeProfile(this.traineeProfile);
    this.traineeProfile.trainersList.forEach(value => {
      this.dataSource.push({firstname : value.firstName, lastname : value.lastName, specialization : value.specialization})
    })
    console.log(JSON.stringify(this.traineeProfile));
    console.log("specialization "+this.traineeProfile.trainersList[0].specialization)
  }

  editTrainers() {
    this.router.navigate(['/trainee/edit-trainers'], { state: { traineeProfile: this.traineeProfile } });
  }

  editProfile() {
    this.router.navigate(['/trainee/edit-profile'],{state : {traineeProfile : this.traineeProfile}});
  }

  editPassword() {
    this.router.navigate(['/user/update-password'],{state : {userName : this.traineeProfile.userName}});
  }
}

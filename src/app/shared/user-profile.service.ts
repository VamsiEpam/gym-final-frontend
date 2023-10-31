import { Injectable } from '@angular/core';
import {TraineeDetailsDTO} from "../dto/TraineeDetailsDTO";
import {TrainerDetailsDTO} from "../dto/TrainerDetailsDTO";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { }

  private _traineeProfile : TraineeDetailsDTO = new TraineeDetailsDTO();

  private _trainerProfile : TrainerDetailsDTO = new TrainerDetailsDTO();


  get traineeProfile(): TraineeDetailsDTO {
    return this._traineeProfile;
  }

  setTraineeProfile(value: TraineeDetailsDTO) {
    this._traineeProfile = value;
  }

  get trainerProfile(): TrainerDetailsDTO {
    return this._trainerProfile;
  }

  setTrainerProfile(value: TrainerDetailsDTO) {
    this._trainerProfile = value;
  }
}



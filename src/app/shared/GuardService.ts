import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserProfileService} from "./user-profile.service";

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  private currentUserRole: string = "";


  constructor(private router:Router,private userService : UserProfileService) {
  }

  public setUserRole(roleId:number) {
    this.currentUserRole = roleId==1?"trainer":"trainee";
    localStorage.setItem("userRole",this.currentUserRole);
  }

  isUserTrainee(): boolean {
    return localStorage.getItem("userRole") === "trainee";
  }


  isUserTrainer(): boolean {
    return localStorage.getItem("userRole") === "trainer";
  }

  isTokenPresent() {
    return localStorage.getItem("userRole") === "";
  }

  redirectToHome(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  redirectToTrainerHome() {
    this.router.navigate(['/trainer'],{state : {trainerProfile : this.userService.trainerProfile}})
  }

  redirectToTraineeHome() {
    this.router.navigate(['/trainee'],{state : {traineeProfile : this.userService.traineeProfile}})
  }
}

import { CanActivateFn } from '@angular/router';
import {GuardService} from "./GuardService";
import {inject} from "@angular/core";

export const trainerGuard: CanActivateFn = (route, state) => {
  const roleGuardService = inject(GuardService);
  if(roleGuardService.isUserTrainer()){
    return true;
  }else{
    if (roleGuardService.isTokenPresent()) {
      alert("Please Login First");
      roleGuardService.redirectToHome();
      return false;
    } else {
      alert("Access Denied");
      roleGuardService.redirectToHome();
      // roleGuardService.redirectToTrainerHome();
      return false;
    }
  }
};

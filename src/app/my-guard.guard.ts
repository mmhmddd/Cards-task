import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const myGuardGuard: CanActivateFn = (route, state) => {
  const appService= inject(AuthService)

  if(appService.isLoggedIn()){
    return false
  }
  return true ;
};

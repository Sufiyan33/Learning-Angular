import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  /* First check here user is logged in or not if logged in then return
    true otherwise navigate to login page.
  */
  const router = inject(Router)
  const loggedUserFlag = localStorage.getItem('loginUser');
  if(loggedUserFlag != null){
    return true;
  }else{
    router.navigateByUrl('login');
    return false;
  }
};

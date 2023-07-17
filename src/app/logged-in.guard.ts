import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const loggedInGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const isLoggedIn = JSON.parse(localStorage.getItem('user'));

  if (isLoggedIn){
    return true;
  } else {
    router.navigateByUrl('home');
    return false;
  }

};

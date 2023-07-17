import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const admin: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const ruolo = JSON.parse(localStorage.getItem('user')).role;

  if (ruolo == 'admin'){
    return true;
  } else {
    router.navigateByUrl('home');
    return false;
  }

};

import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from './service/auth.service';

export const produitGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAdmin()){
    return true;
  } else {
    router.navigate(['app-forbiden']);
    return false;
  }

};

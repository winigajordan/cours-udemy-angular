import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from './auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const toExclude = "/login";

  if (req.url.search(toExclude) === -1){
    let jwt =authService.getToken();
    let reqWithToken = req.clone({
      setHeaders: {Authorization: "Bearer " + jwt},
    })
    return next(reqWithToken);
  }
  return next(req);

};

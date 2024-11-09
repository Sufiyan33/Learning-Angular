import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const API_KEY = 'test123';
  const rq = req.clone({
    setHeaders:{
      API_KEY,
    }
  })
  return next(rq);
};

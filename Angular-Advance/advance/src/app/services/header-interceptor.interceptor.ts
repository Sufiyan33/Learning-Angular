import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

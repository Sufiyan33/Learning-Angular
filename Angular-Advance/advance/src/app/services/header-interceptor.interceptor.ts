import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const API_KEY = 'test123';
  const rq = req.clone()
  rq.headers.set("SettingHeaserValue", "123")
  rq.headers.append("SettingHeaserValue", "123")
  return next(rq);
};

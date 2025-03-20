import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req ,next) => {
  
  return next(req);
//  if(localStorage.getItem('userToken')){
//   req =req.clone({
//     setHeaders: {
//       token : localStorage.getItem("userToken")!,
//     },
//   });

// }




};

import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  return true;

const _pLATFORM_ID=inject(PLATFORM_ID)
const _router=inject(Router)

if(isPlatformBrowser(_pLATFORM_ID)){
  if(localStorage.getItem("userToken")){
    return true
  }
  _router.navigate(['/login'])
  
    return false
  
}else{
  return false
}

  
};

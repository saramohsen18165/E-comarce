import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthUser, LoginUser } from '../../interfaces/auth-user';
import { API_BASE_URL } from '../../../token/api-token';
import{jwtDecode}   from'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

   userDate:BehaviorSubject<any> =new BehaviorSubject(null)
  _httpClient=inject(HttpClient)
  _baseUrl=inject(API_BASE_URL)




  constructor() { }


registerUser(userInfo:AuthUser): Observable<any> {
  return this._httpClient.post(`${this._baseUrl}/auth/signup`,userInfo )
}

loginUser(userInfo:LoginUser): Observable<any> {
  return this._httpClient.post(`${this._baseUrl}/auth/signin`,userInfo)
}


saveUser(){
  if(localStorage.getItem("userToken")){
this.userDate.next(jwtDecode(localStorage.getItem("userToken")!))
  }
}



isLoggedIn():boolean{

if(localStorage.getItem("userToken")){
  this.userDate.next(jwtDecode(localStorage.getItem("userToken")!))
  return true
}else{
  return false
}

}



verfiyEmail(data:object):Observable<any>{
  return this._httpClient.post(`${this._baseUrl}/auth/forgotPasswords`, data)
}

verfiyCode(data:object):Observable<any>{
  return this._httpClient.post(`${this._baseUrl}/auth/verifyResetCode`, data)
}

updateLogin(data:object):Observable<any>{
  return this._httpClient.put(`${this._baseUrl}/users/changeMyPassword`, data)
}

}

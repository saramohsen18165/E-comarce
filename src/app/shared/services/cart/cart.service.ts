import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../token/api-token';


@Injectable({
  providedIn: 'root'
})
export class CartService {


_pLATFORM_ID=inject(PLATFORM_ID)
_httpClient=inject(HttpClient)
_baseUrl=inject(API_BASE_URL)
token!:string 



constructor() {
if(isPlatformBrowser(this._pLATFORM_ID)){
  this.token= JSON.stringify(localStorage.getItem("userToken"))


}

 }




addproductcart(productId:string): Observable<any>{
   return this._httpClient.post(
    `${this._baseUrl}/cart`,
      {
        productId: productId,
      },


{
     headers:{
       token: JSON.parse(this.token)
    
    }
  })
}


updatecart(productId:string, count:string):Observable<any>{
 return this._httpClient.put(`${this._baseUrl}/cart/${productId}`,{count}, {
  headers:{
    token: JSON.parse(this.token)
  }
})
}



getcart():Observable <any>{
return  this._httpClient.get(`${this._baseUrl}/cart`,{
  headers:{
    token: JSON.parse(this.token)
  }
})
}



Removespecific(productId:string):Observable <any>{

return this._httpClient.delete(`${this._baseUrl}/cart/${productId}`,{
  headers:{
    token:JSON.parse(this.token)
  }
})


}


clearcart():Observable <any>{

  return this._httpClient.delete(`${this._baseUrl}/cart`,{
    headers:{
      token:JSON.parse(this.token)
    }
  })
  
  
  }


}

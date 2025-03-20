
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../token/api-token';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  constructor() { }
private readonly _httpClient=inject(HttpClient)
private readonly _aPI_BASE_URLl=inject(API_BASE_URL)

token= JSON.stringify(localStorage.getItem("userToken"))



chashOrder(id:string,shippingAddress:{details:string,phone:string,city:string}): Observable<any> {

return this._httpClient.post(`${this._aPI_BASE_URLl}/orders/${id}`,{shippingAddress},{
  headers:{
    token:JSON.parse(this.token)
  }
})
  

}

getAllOrders():Observable<any>{

return this._httpClient.get(`${this._aPI_BASE_URLl}/orders/`)


}



getUserOrders(id:string):Observable<any>{


return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)

}


onlinePayment(id:string,shippingAddress:{details:string,phone:string,city:string}):Observable<any>{
  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,{shippingAddress},{
    headers:{
      token:JSON.parse(this.token)
    }
  })
}













}

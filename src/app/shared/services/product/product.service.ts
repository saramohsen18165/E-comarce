import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

 private readonly _httpClient=inject(HttpClient)

getproducts(categoryId?:string):Observable <any> {

  let url= categoryId? `https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`:"https://ecommerce.routemisr.com/api/v1/products"
  return this._httpClient.get(url);
}


getproductsById(id:string):Observable <any> {
  return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
}


}

import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../token/api-token';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _httpClient=inject(HttpClient)
  _baseUrl=inject(API_BASE_URL)

  
  

  getallgategories():Observable<any> {
   return this._httpClient.get(`${this._baseUrl}/Categories`)
    
  }




 
}

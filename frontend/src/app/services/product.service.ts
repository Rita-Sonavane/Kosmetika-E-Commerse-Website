import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Hair_Care_Product, Skin_Care_Product } from '../shared/models/data-types';
import { HAIR_CARE, HAIR_CARE_BY_SEARCH_URL, SKIN_CARE, SKIN_CARE_BY_SEARCH_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public searchNew = new BehaviorSubject<string>("");
  
  constructor(private http: HttpClient) { }


  //Skin Care Products

  getAll(): Observable<Skin_Care_Product[]> {
    return this.http.get<Skin_Care_Product[]>(SKIN_CARE);
  }


  getProduct(id: any): Observable<Skin_Care_Product> {
    return this.http.get<Skin_Care_Product>('http://localhost:4000/api/skin_care/'+ id);
  }


  getAllProductsBySearch(searchTearm: string) {
    return this.http.get<Skin_Care_Product[]>(SKIN_CARE_BY_SEARCH_URL + searchTearm);

  }


  //Hair Care Products

  getHairCareAll(): Observable<Hair_Care_Product[]> {
    return this.http.get<Hair_Care_Product[]>(HAIR_CARE);
  }

  getHairCareProduct(id: any): Observable<Hair_Care_Product> {
    return this.http.get<Hair_Care_Product>('http://localhost:4000/api/hair_care/' + id);
  }

  getAllHairCareProductsBySearch(searchTearm: string) {
    return this.http.get<Hair_Care_Product[]>(HAIR_CARE_BY_SEARCH_URL + searchTearm);

  }



}

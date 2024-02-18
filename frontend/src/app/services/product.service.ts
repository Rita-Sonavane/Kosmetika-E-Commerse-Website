import { Injectable } from '@angular/core';
import { Skin_Care_Product } from '../shared/models/data-types';
import { sample_products } from '../shared/models/skin-care-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():Skin_Care_Product[] {
   return sample_products;
  }
}

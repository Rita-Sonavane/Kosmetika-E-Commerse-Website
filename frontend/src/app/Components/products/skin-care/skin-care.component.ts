import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Skin_Care_Product } from 'src/app/shared/models/data-types';

@Component({
  selector: 'app-skin-care',
  templateUrl: './skin-care.component.html',
  styleUrls: ['./skin-care.component.css']
})
export class SkinCareComponent implements OnInit{


  skin_care_products: Skin_Care_Product[] = [];

  constructor(private productService:ProductService){
    this.skin_care_products = productService.getAll();
  }

  ngOnInit(): void {
    
  }

}

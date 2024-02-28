import { Component } from '@angular/core';
import { Skin_Care_Product } from '../shared/models/data-types';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-skin-care-pdetail',
  templateUrl: './skin-care-pdetail.component.html',
  styleUrls: ['./skin-care-pdetail.component.css']
})
export class SkinCarePdetailComponent {
  productdetail: Skin_Care_Product | any;


  constructor(private activaRote: ActivatedRoute, private productService: ProductService) {
    //New

    activaRote.params.subscribe((params) => {

      
      if(params['id']){
        productService.getProduct(params['id']).subscribe(serveProduct =>{
          this.productdetail = serveProduct;
        })
      }

    });

  }

}

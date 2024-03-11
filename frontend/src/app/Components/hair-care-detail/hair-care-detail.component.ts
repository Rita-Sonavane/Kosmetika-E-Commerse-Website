import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Hair_Care_Product } from 'src/app/shared/models/data-types';

@Component({
  selector: 'app-hair-care-detail',
  templateUrl: './hair-care-detail.component.html',
  styleUrls: ['./hair-care-detail.component.css']
})
export class HairCareDetailComponent implements OnInit{


  productdetail: Hair_Care_Product | any;
  
  constructor(private activaRote: ActivatedRoute, private productService: ProductService,private router:Router) {
    //New

    activaRote.params.subscribe((params) => {

      if(params['id']){
        productService.getHairCareProduct(params['id']).subscribe((serveProduct: any) =>{
          this.productdetail = serveProduct;
        })
      }

    });
   }


  ngOnInit(): void {
    // let productId = this.activaRote.snapshot.paramMap.get('id');

    // this.productdetail = this.productService.getHairCareProduct(productId);
  }

}

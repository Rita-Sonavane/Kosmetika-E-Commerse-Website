import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Hair_Care_Product } from 'src/app/shared/models/data-types';

@Component({
  selector: 'app-hair-care-search',
  templateUrl: './hair-care-search.component.html',
  styleUrls: ['./hair-care-search.component.css']
})
export class HairCareSearchComponent {

  products:Hair_Care_Product[]=[];
  searchTerm:string='';
  searchTermNew:string='';

  constructor(activatedRoute:ActivatedRoute,private router:Router,private productService:ProductService){
    let productObservable:Observable<Hair_Care_Product[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        this.searchTerm= params['searchTerm'];
      }
      else{
        productObservable =this.productService.getHairCareAll();
      }

      productObservable.subscribe((serveProduct)=>{
        this.products = serveProduct;
      });
    })
  }


//  search(term:string):void{
//   if(term){
//     this.router.navigateByUrl('/search/'+term);
//   }
//  }


 searchNew(event:any){
    this.searchTermNew = (event.target as HTMLInputElement).value;
    this.productService.searchNew.next(this.searchTermNew);
  }


}

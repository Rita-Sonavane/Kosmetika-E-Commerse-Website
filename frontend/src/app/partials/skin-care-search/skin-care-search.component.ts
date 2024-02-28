import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Skin_Care_Product } from 'src/app/shared/models/data-types';

@Component({
  selector: 'app-skin-care-search',
  templateUrl: './skin-care-search.component.html',
  styleUrls: ['./skin-care-search.component.css']
})
export class SkinCareSearchComponent implements OnInit{

  products:Skin_Care_Product[]=[];  

  searchTerm:string='';
  searchTermNew:string='';

  constructor(activatedRoute:ActivatedRoute,private productService:ProductService){
    let skin_careObsevable:Observable<Skin_Care_Product[]>;

    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        this.searchTerm= params['searchTerm'];
      }
      else{
        // this.products =this.productService.getAll();
        skin_careObsevable=this.productService.getAll();

        skin_careObsevable.subscribe((serveProduct)=>{
          this.products= serveProduct;
        })

      }
    })
  }

  ngOnInit():void{
  
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


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Skin_Care_Product } from 'src/app/shared/models/data-types';

@Component({
  selector: 'app-skin-care',
  templateUrl: './skin-care.component.html',
  styleUrls: ['./skin-care.component.css']
})
export class SkinCareComponent {


  isChecked: boolean = false;
  isCheckedAll:boolean= false;

  products: Skin_Care_Product[] = [];
  searcKey: any = '';

  public productList: any;
  public filterCategory: Skin_Care_Product[] = [];
  wishlist: any[] = [];

  constructor(private productService: ProductService, activatedRoute: ActivatedRoute,private router: Router,) {
  let productObservable:Observable<Skin_Care_Product[]>;

    activatedRoute.params.subscribe((params) => {

      if (params['searchTerm']) {
       productObservable= this.productService.getAllProductsBySearch(params['searchTerm']);
      }
      else {
        productObservable = this.productService.getAll();
        productObservable = this.productService.getAll();

       
      }

      this.productService.searchNew.subscribe((val:any)=>{
        this.searcKey = val;   
       
      })

      productObservable.subscribe((serveProduct)=>{
        this.products = serveProduct;
        this.productList  = serveProduct;
        this.filterCategory  = serveProduct;

        console.log(this.filterCategory)
      });


   
    })

  }




  // filter(category: string) {
  //   // if (this.isChecked) {
  //     console.log("Inside filter");
  //     this.filterCategory = this.products
  //       .filter((res: any) => {
  //         if (res.skinType == category || category == '') {
  //           return res;
  //         }
  //         else if (res.spf == category || category == '') {
  //           return res;
  //         }
  //         else if (res.Conscious == category || category == '') {
  //           return res;
  //         }

  //       })
  //   // }

  //   // else if(this.isCheckedAll){
  //   //   this.filterCategory = this.productService.getAll();
  //   // }

  // }

  

selectedCategories: string[] = []; // Initialize an array to store selected categories.

filter(category: string) {
    console.log("Inside filter");

    // Check if the category is already selected.
    const index = this.selectedCategories.indexOf(category);

    if (index === -1) {
        // If the category is not in the selected categories, add it.
        this.selectedCategories.push(category);
    } else {
        // If the category is already selected, remove it.
        this.selectedCategories.splice(index, 1);
    }

    // Now filter the products based on the selected categories.
    this.filterCategory = this.products.filter((res: any) => {
        if (this.selectedCategories.length === 0) {
            // If no categories are selected, return all products.
            return true;
        }

        // Check if the product matches any of the selected categories.
        return this.selectedCategories.some(selectedCategory => {
            return (
                res.skinType === selectedCategory ||
                res.spf === selectedCategory ||
                res.Conscious === selectedCategory
            );
        });
    });
}

}

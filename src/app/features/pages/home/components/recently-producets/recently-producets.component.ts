import { ProductsComponent } from './../../../products/products.component';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../../../shared/services/product/product.service';
import { product } from '../../../../../shared/interfaces/product';
import { ProductItemsComponent } from "../../../../../shared/components/ui/product-items/product-items.component";
import { CartService } from '../../../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recently-producets',
  imports: [ProductItemsComponent],
  templateUrl: './recently-producets.component.html',
  styleUrl: './recently-producets.component.scss'
})
export class RecentlyProducetsComponent  implements OnInit{


products!: product [];
isloaded:boolean=false

private readonly _productService=inject(ProductService)
private readonly _CartService=inject(CartService)
private readonly _toastrService =inject(ToastrService)



ngOnInit(): void {
  this.getproducts();
  
}
getproducts(){
  this._productService.getproducts().subscribe({
    next:(res)=>{
      console.log(res);
      this.products= res.data
      
    },
    error:(err) =>{
      console.log(err);
      
    },
    complete(){
      console.log("complete");
      
    },
  })
}



addcart(id:string){
  this.isloaded=true
  this._CartService.addproductcart(id).subscribe({
next:(res)=> {
  console.log(res);
  this.isloaded=false
  this._toastrService.success(res.message, 'Add To Card');
  
},
error(err) {
  console.log(err);
  
},
  })
}



}

import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../../../shared/interfaces/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductItemsComponent } from "../../../shared/components/ui/product-items/product-items.component";
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-detials',
  imports: [CarouselModule, ProductItemsComponent],
  templateUrl: './products-detials.component.html',
  styleUrl: './products-detials.component.scss'
})
export class ProductsDetialsComponent implements OnInit {

 private readonly  _activatedRoute=inject(ActivatedRoute)
 private readonly _productService=inject(ProductService)
 private readonly _cartService=inject(CartService)
 private readonly _toastrService =inject(ToastrService)

isLoaded:boolean=false
productDetails:product={} as product
relatedProduct!: product[]

AppiError!:string

 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },

  },
  nav: true
}




ngOnInit(): void {
  this.getID()
}


getID(){

this._activatedRoute.paramMap.subscribe({
  next:(res:any)=> {
    console.log(res?.params?.id);
    this.getDetails(res?.params?.id)
  },
})

  
  
}


getDetails(id:string){
this._productService.getproductsById(id).subscribe({
next:(res)=> {
  console.log(res);
  this.productDetails=res.data
  this.getRelatedProduct(this.productDetails.category._id)
  
},
error:(err)=> {
  console.log(err);
  this.AppiError=err.error.message
  
},
complete() {
  console.log("done");
  
},

})
}
 


getRelatedProduct(categoryId:string){
this._productService.getproducts(categoryId).subscribe({
  next:(res)=> {
    console.log(res);
    this.relatedProduct=res.data
    
  },
  error(err) {
    console.log(err);
    
  },
})
}



addcart(id:string){
  this.isLoaded=true
  this._cartService.addproductcart(id).subscribe({
    next:(res) =>{
      console.log(res);
      this.isLoaded=false
      this._toastrService.success(res.message, 'Add To Card');
    },
  })
}

}

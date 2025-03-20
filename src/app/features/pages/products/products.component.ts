import { Component, inject } from '@angular/core';
import { product } from '../../../shared/interfaces/product';
import { ProductService } from '../../../shared/services/product/product.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


  
  products!: product [];
  private readonly _toastrService=inject(ToastrService)
  private readonly _productService=inject(ProductService)
  private readonly _cartService=inject(CartService)
  isloaded:boolean=false
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
    this._cartService.addproductcart(id).subscribe({
      next:(res) =>{
        console.log(res);
        this.isloaded=false
        this._toastrService.success(res.message," ADD To Card")
      },
    })
  }
  
}

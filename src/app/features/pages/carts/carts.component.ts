import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Cart } from '../../../shared/interfaces/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carts',
  imports: [RouterLink],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit {


cartDetails!:Cart

  private readonly _cartService=inject(CartService)
emptycart:boolean=false

ngOnInit(): void {
  this.getcart()
}
  

getcart(){
  this._cartService.getcart().subscribe({
    next:(res)=>{
      this.cartDetails=res
      console.log(res);
      
    }
  })
}



removeItem(id:string){
  this._cartService.Removespecific(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.cartDetails=res
      
    }
  })
}




updatecart(id:string,count:number){
  this._cartService.updatecart(id,`${count}`).subscribe({
    next:(res)=>{
      console.log(res);
      this.cartDetails=res
      
    }
  })
}




clearcart(){
  this._cartService.clearcart().subscribe({
    next:(res)=>{
      console.log(res);
    if(res.message == "success"){
         this.cartDetails =  {} as Cart
         this.emptycart=true
    }
    }
  })
}

}

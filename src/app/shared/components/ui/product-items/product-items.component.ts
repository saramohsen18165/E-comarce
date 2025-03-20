import { RouterLink } from '@angular/router';
import { product } from './../../../interfaces/product';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-items',
  imports: [RouterLink],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.scss'
})
export class ProductItemsComponent {


@Input() product!: product
  
@Output() fireaddcart: EventEmitter<string>= new EventEmitter() 



handelAddTocart(id:string){
   this.fireaddcart.emit(id)
}

}

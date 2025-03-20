import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CheckOutService } from '../../../shared/services/checkOut/check-out.service';

@Component({
  selector: 'app-check-out',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent implements OnInit {




private readonly _activatedRoute=inject(ActivatedRoute)
private readonly _checkOutService=inject(CheckOutService)
cartId!:string


checkoutForm!: FormGroup



ngOnInit(): void {
  this.getCartId()
  this.initform()
}


getCartId(){
  this.cartId =  this._activatedRoute.snapshot.params['cartId']
}


initform(){
this.checkoutForm= new FormGroup({

  details: new FormControl(null,[Validators.required]),
city: new FormControl(null,[Validators.required]),
phone: new FormControl(null,[Validators.required])



})
}


completeOrder(){

  this._checkOutService.onlinePayment(this.cartId,this.checkoutForm.value).subscribe({
    next:(res)=>{
      open(res.session.url)
    }
  })
  // this._checkOutService.chashOrder(this.cartId,this.checkoutForm.value).subscribe({
  //   next:(res)=>{
  //     console.log(res);
      
  //   }
  // })
}


cash(){
  this._checkOutService.chashOrder(this.cartId,this.checkoutForm.value).subscribe({
    next:(res)=>{
      console.log(res.shippingAddress);
      
    }
  })
}


}

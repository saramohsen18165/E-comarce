import { orders } from './../../../shared/interfaces/orders';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CheckOutService } from '../../../shared/services/checkOut/check-out.service';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {

private readonly _authService=inject(AuthService)
private readonly _checkOutService=inject(CheckOutService)
 allorder!: orders[]

  ngOnInit(): void {
    this.getUserId()
  }





  getUserId(){
    this._authService.userDate.subscribe({
      next:(res)=>{
    res.id && this.getAllOrder(res.id)
      }
    })
  }


  getAllOrder(id:string){
    this._checkOutService.getUserOrders(id).subscribe({
      next:(res)=>{
console.log(res);
this.allorder=res

      }
    })
  }

}

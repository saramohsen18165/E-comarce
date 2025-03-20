import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../../shared/services/brand/brand.service';
import { Brand } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {

_brandService=inject(BrandService)

brands!: Brand[]


ngOnInit(): void {
  this.getallbrand()
}

getallbrand(){
  
this._brandService.getbrand().subscribe({
  next:(res)=> {
    console.log(res);
    this.brands=res.data
    
  },
error(err) {
  console.log(err);
  
},

complete() {
  console.log("done");
  
},
})

}


}

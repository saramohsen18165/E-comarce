import { Category } from './../../../shared/interfaces/category';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../shared/services/categories/category.service';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

_categoryService=inject(CategoryService)



categoryDetails!:Category[]
category! : Category[]

ngOnInit(): void {
  this.getcategories()
 

}
getcategories(){
  this._categoryService.getallgategories().subscribe({
    next:(res)=> {
      console.log(res);
    this.category=res.data
      
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

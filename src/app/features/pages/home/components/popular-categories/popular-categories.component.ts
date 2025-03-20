
import { Category } from '../../../../../shared/interfaces/category';
import { CategoryService } from './../../../../../shared/services/categories/category.service';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions  } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-categories',
  imports: [CarouselModule],
  templateUrl: './popular-categories.component.html',
  styleUrl: './popular-categories.component.scss'
})
export class PopularCategoriesComponent implements OnInit {

  constructor(){  }

_categoryService = inject(CategoryService)
 categories!: Category[]

 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 7
    }
  },
  nav: true
}


ngOnInit(): void {
  this.getCategories();
}

getCategories(){
this._categoryService.getallgategories().subscribe({
  next:(res)=> {
    console.log(res.data);
    this.categories= res.data
   
  },
  error:(err)=> {
    console.log(err);
   
    
  },
  complete() {
    console.log("done");
    
  },
})
}


}

import { Component } from '@angular/core';
import { RecentlyProducetsComponent } from "./components/recently-producets/recently-producets.component";
import { PopularCategoriesComponent } from "./components/popular-categories/popular-categories.component";
import { MainSliderComponent } from "./components/main-slider/main-slider.component";

@Component({
  selector: 'app-home',
  imports: [RecentlyProducetsComponent, PopularCategoriesComponent, MainSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

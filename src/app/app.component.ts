import { FlowbiteService } from './shared/services/flowbite.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/layout/navbar/navbar.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'E-commarce';
_authService=inject(AuthService)
  _flowbiteService =inject(FlowbiteService)

  constructor(){

  }
  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });



    this._authService.isLoggedIn()
  }
} 

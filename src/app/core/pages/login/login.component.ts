
// import { Router } from 'express';
import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

import { Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { subscribe } from 'diagnostics_channel';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

IsCallingApi: boolean=false

toggleInput:boolean=false
subscription: Subscription = new Subscription()
LoginForm: FormGroup= new FormGroup({

  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-z]\w{5,}$/)]),
 
},)

_authService=inject(AuthService)
_router=inject(Router)

Login(){
  console.log(this.LoginForm);
  if(this.LoginForm.invalid){
  this.LoginForm.markAllAsTouched()
  }else{
  
this.IsCallingApi=true
if(this.subscription) this.subscription.unsubscribe()
  this.subscription =  this._authService.loginUser(this.LoginForm.value).subscribe({
    next:(res)=> {
      console.log(res);

      this.IsCallingApi=false
      localStorage.setItem("userToken",res.token)
      // this._router.navigate(['/home'])
     
      
    },
    error:(err)=> {
      console.log(err);
      
      this.IsCallingApi=false
      
      
    },
    complete(){
    console.log("done");

    }
  })
  
    }




setTimeout(()=>{
  this._router.navigate(['/home'])
},2000,)    
  
}


togglepass(){
this.toggleInput=!this.toggleInput


}






ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}

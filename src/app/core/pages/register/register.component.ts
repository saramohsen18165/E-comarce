import { JsonPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { } from '@angular/core/testing';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
apiError!:string
IsCallingApi: boolean=false
subscribtion: Subscription= new Subscription()
registerForm: FormGroup= new FormGroup({
  name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]\w{5,}$/)]),
  rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]\w{5,}$/)]),
  phone: new FormControl(null,[Validators.required,Validators.pattern('01[0125][0-9]{8}')])
}, {validators:[this.validatePassword]})

_authService=inject(AuthService)
_router=inject(Router)

register(){
  console.log(this.registerForm);
  if(this.registerForm.valid){
    // this.apiError=''
this.IsCallingApi=true
if(this.subscribtion) this.subscribtion.unsubscribe()
  this.subscribtion=  this._authService.registerUser(this.registerForm.value).subscribe({
    next:(res)=> {
      console.log(res);
      this.IsCallingApi=false
      this._router.navigate(['/login'])
      
    },
    error:(err:HttpErrorResponse)=> {
      console.log(err);
      this.apiError =err.error.message;
      this.IsCallingApi=false
      
      
    },
    complete(){
    console.log("done");

    }
  })
  }else{
    this.registerForm.markAllAsTouched()
  
    }

  
}




validatePassword(form:AbstractControl){
const password = form.get('password')?.value
const rePassword = form.get('rePassword')?.value


if(password == rePassword){
  return null

}else{
  return {mismatch: true}
}

}


ngOnDestroy(): void {
  this.subscribtion.unsubscribe()
}

}

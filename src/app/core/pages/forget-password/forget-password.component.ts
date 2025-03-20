import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {


private readonly _authService=inject(AuthService)
private readonly _router=inject(Router)

step:number=1




VerfiyEmailForm: FormGroup= new FormGroup({

  email: new FormControl(null,[Validators.required,Validators.email]),
},)


VerfiyCodeForm: FormGroup= new FormGroup({

  resetcode: new FormControl(null,[Validators.required,Validators.pattern(/^\w{6}$/)]),
},)


updateLoginForm: FormGroup= new FormGroup({

  email: new FormControl(null,[Validators.required,Validators.email]),
  newpassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-z]\w{5,}$/)]),
 
},)



sendEmail(){
  this._authService.verfiyEmail(this.VerfiyEmailForm.value).subscribe({
next:(res)=>{
if(res.statusMsg=="success"){
  this.step=2;
}
},
error(err) {
  console.log(err);
  
},
  
})
}

sendRecetCode(){
  this._authService.verfiyCode(this.VerfiyCodeForm.value).subscribe({
next:(res)=>{
  if(res.status=='Success'){
    this.step=3
  }
},
error(err) {
  console.log(err);
  
},
  })
}


sendNewPass(){
  this._authService.updateLogin(this.updateLoginForm.value).subscribe({
next:(res)=>{
  this._router.navigate(['/login'])
}
  })
}

}

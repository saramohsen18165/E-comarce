import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth/auth.guard';

export const routes: Routes = [



{
path:'',
redirectTo:'login',
pathMatch:'full'
},

{path:"", component:AuthLayoutComponent, children:[
    {path:"register",loadComponent:()=>import('./core/pages/register/register.component').then(c => c.RegisterComponent) },
    {path:"login",loadComponent:()=>import('./core/pages/login/login.component').then(c => c.LoginComponent) },
    {path:"forgetpassword",loadComponent:()=>import('./core/pages/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent) }

]},

{
path:'',
component:MainLayoutComponent,children:[
    {path:"home",    canActivate:[authGuard],  loadComponent:()=>import('./features/pages/home/home.component').then(c => c.HomeComponent)},
    {path:"products",        canActivate:[authGuard],     loadComponent:()=>import('./features/pages/products/products.component').then(c => c.ProductsComponent)},

    {path:"categories",     canActivate:[authGuard],    loadComponent:()=>import('./features/pages/categories/categories.component').then(c => c.CategoriesComponent)},
    {path:"brands",     canActivate:[authGuard],    loadComponent:()=>import('./features/pages/brands/brands.component').then(c => c.BrandsComponent)},
    {path:"carts",  canActivate:[authGuard],   loadComponent:()=>import('./features/pages/carts/carts.component').then(c =>c.CartsComponent)},
    {path:"check-out/:cartId",  canActivate:[authGuard],   loadComponent:()=>import('./features/pages/check-out/check-out.component').then(c =>c.CheckOutComponent)},
    {path:"product-details/:id",   canActivate:[authGuard],  loadComponent:()=>import('./features/pages/products-detials/products-detials.component').then(c =>c.ProductsDetialsComponent)},
    {path:"allorders",  canActivate:[authGuard],   loadComponent:()=>import('./features/pages/order/order.component').then(c =>c.OrderComponent)},
    
    {path:"**",loadComponent:()=>import('./core/pages/not-found/not-found.component').then(c =>c.NotFoundComponent)}
    

]
},








];

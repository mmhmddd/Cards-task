import { ProductsModule } from './feature-modules/products/products.module';
import { ProductComponent } from './feature-modules/products/product/product.component';
import { AboutComponent } from './about/about.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { myGuardGuard } from './my-guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate:[myGuardGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'products', 
    loadChildren: () => import('./feature-modules/products/products.module').then(m => m.ProductsModule) 
  },
    { path: '**', component: ErrorPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

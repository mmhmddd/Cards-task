import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ShowproductComponent } from './showproduct/showproduct.component';

const routes: Routes = [
  {
    path:'',component:ProductComponent ,
    children:[
      {
        path:'create' ,component:CreateproductComponent
      },
      {
        path:'update/id' ,component:UpdateproductComponent
      },
      {
        path:'show' ,component:ShowproductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

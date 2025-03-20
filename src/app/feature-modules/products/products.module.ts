import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    CreateproductComponent,
    ShowproductComponent,
    UpdateproductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }

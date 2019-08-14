import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Route } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductListComponent } from '../product-list/product-list.component';

const productRoute: Routes=[
  {
    path: 'product-menu/addProduct',
    component: ProductComponent
  },
  {
    path: 'product-menu/viewProduct',
    component: ProductListComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, [RouterModule.forChild(productRoute)]
  ],
  exports:[
    RouterModule
  ]
})
export class ProductModule { }

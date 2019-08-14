import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from './product'
import { ProductService } from '../product.service';
 
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product:Product;
toggle:boolean;
para:string;
validate(){
  console.log(this.product);
}
@Output()
productEmitter= new EventEmitter<Product>();
  constructor(private productService: ProductService) {
 
    this.product=new Product();
    this.toggle=false;
   }
 
  ngOnInit() {
  }
  changeDateFormat()
{
  this.toggle=!this.toggle;
  this.para=this.toggle?'mediumDate':'fullDate';
}
 
  add()
  {
    this.productService.addProduct(this.product).subscribe();
    this.productEmitter.emit(this.product)
  }
 
}
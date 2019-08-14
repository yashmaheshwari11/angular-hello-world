import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]=[
  {
    productId: 1001,
    name: "LED Tv",
    brand: "HP",
    price: 20000,
  },
  {
    productId: 1002,
    name: "Laptop",
    brand: "Dell",
    price: 42000,
  }
  ];

  constructor(private productService: ProductService) { 
    
  }

  ngOnInit() {
    
    this.showProducts()
  }

  addProduct(product:Product)
  {
    let p:Product=new Product()
    p.productId=product.productId
    p.name=product.name
    p.brand=product.brand
    p.price=product.price
    this.products.push(p)
  }

  showProducts()
  {
    this.productService.getAllProducts().subscribe(data => this.products=data)
  }

}

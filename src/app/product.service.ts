import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}


getAllProducts()
{
  return this.http.get<Product[]>('http://localhost:8080/products');
}

addProduct(product: Product )
{
  return this.http.post('http://localhost:8080/products',product)
}
   
}

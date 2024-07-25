import { Injectable } from '@angular/core';
import { Product } from '../models/producto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private products: Product[] = [];


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/');
  }

  addProduct(product: Product): void {
    
    this.products.push(product);
  }

}

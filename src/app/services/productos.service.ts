import { Injectable } from '@angular/core';
import { Product } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private products: Product[] = [];

  BASE_URL: string = 'http://localhost:3000'


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>( this.BASE_URL +'/product');
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>( this.BASE_URL +'/product', product);
  }

  editProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>( this.BASE_URL +'/product/'+ product.id, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>( this.BASE_URL +'/product/'+ product.id);
  }
}

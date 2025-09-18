
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Add a new product to the database
  add(product: Product): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, product);
  }

  //Get list of all products
  getList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getlist`);
  }

  //Get a single product by its Mongo _id
  getItem(productID: string): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/getitem`, { 
      productid: productID 
    });
  }

  //Update an existing product
  updateItem(product: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update`, product);
  }

  //Delete a product by its Mongo _id
  deleteItem(productID: string): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.baseUrl}/deleteitem`, { 
      productid: productID 
    });
  }

  //Check if a product ID already exists
  checkValidId(productID: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/checkvalidid`, { 
      id: productID 
    });
  }

  //Get total count of products
  getProductCount(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/prodcount`);
  }
}
import { Product } from './../interfaces/product.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'http://localhost:3000/products';
  private deleteURL = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  deleteProduct(element:number){
    this.http.delete<Product[]>(this.deleteURL+element).subscribe(() => {

      console.log("delete completed!");
    });
  }

  uploadfile(products: any): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.post<any>(this.apiURL, JSON.stringify(products), {headers:headers});
  }


}

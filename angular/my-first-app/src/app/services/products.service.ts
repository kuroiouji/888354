import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getProductList() {
    return this.http.get('/app_api/products').map((res) => res.json());
  }
}

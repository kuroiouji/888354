import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUserList(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').map((res) => res.json());
  }
}

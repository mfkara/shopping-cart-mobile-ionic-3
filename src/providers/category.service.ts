import { Category } from './../entities/category';
import { Inject, Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // alt + shift +down
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class CategoryService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl ) { }

  url:string = this.apiUrl + '/categories';

  getCategories(): Observable< Category[] > {
     return this.http.get(this.url).map(response=>response.json());
  }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Category } from '../interface/category';
 
@Injectable()
 
// Service for categories data.
export class CategoryService {
 
    // We need Http to talk to a remote server.
    constructor(private _http: Http) { }
 
    // Get list of categories from database via api.
    readCategories(): Observable<Category[]>{
        return this._http
            .get("http://developpement.multiresto.fr/api/category/read.php")
            .map(res => res.json());
    }
 
}
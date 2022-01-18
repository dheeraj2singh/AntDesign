import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormModel } from '../model/form-model.model';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteSearchService {

  constructor(private http:HttpClient) { }


  baseurl:string="https://jsonplaceholder.typicode.com/users";

    getAllUsername(){
      return this.http.get(`${this.baseurl}`);
    }

   
}

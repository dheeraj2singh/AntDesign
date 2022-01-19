import { HttpClient, HttpClientModule } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormModel } from '../Interface/form-model.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutocompleteSearchService {

  constructor(private http:HttpClient) { }
  //url 
  baseurl:string="https://jsonplaceholder.typicode.com/users";

    getAllUsername():Observable<any>{
      return this.http.get(`${this.baseurl}`).pipe(map((data:any)=>{
        let d:string[]=[];
        data.forEach((element:any) => {
          d.push(element['name'])
        })
        return d;
      }));

    }
}

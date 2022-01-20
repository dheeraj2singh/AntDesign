import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
        let temp_list:string[]=[];
        temp_list.forEach((element:any) => {
          temp_list.push(element['name'])
        })
        return temp_list;
      }));

    }
}

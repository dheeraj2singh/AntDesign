import { FormModel } from '../Interface/form-Interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // url for data api server
 url:string="http://localhost:8002/data";

  constructor(private http:HttpClient) { }

  // add function to call api in localhost on port 8002
  addData(data:FormModel):Observable<FormModel>{
    return this.http.post<FormModel>(this.url,data);
  }
  // get api calling
  getData():Observable<any>{
      return this.http.get(this.url);
  }
 // delete api calling
  removeData(id:number){
    return this.http.delete(this.url+'/'+id);
  }
}

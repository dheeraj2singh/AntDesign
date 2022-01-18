import { FormModel } from './../model/form-model.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

 url:string="http://localhost:8002/data";

  constructor(private http:HttpClient) { }

  addData(data:FormModel):Observable<FormModel>{
    return this.http.post<FormModel>(this.url,data);
  }

  getdata():Observable<any>{
      return this.http.get(this.url);
  }

  removedata(id:number){
    return this.http.delete(this.url+'/'+id);
  }
}

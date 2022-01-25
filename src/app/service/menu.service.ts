import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuUrl: string = 'http://localhost:8003/menu';
  constructor(private http: HttpClient) {}

  getMenu(cMenu: string): Observable<any> {
    return this.http.get(`${this.menuUrl}?label=${cMenu}`);
  }
}

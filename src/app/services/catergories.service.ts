import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagable } from '../model/pageable.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private CATG_URL =`${environment.apiBaseUrl}/categories`;

  constructor(private httpClient: HttpClient) { }


  /** Get category List */
  getAll(pagable:Pagable){
      return this.httpClient.get<any[]>(`${this.CATG_URL}?page=${pagable.page}&size=${pagable.size}&sort=${pagable.sort}&sortOrder=${pagable.sortOrder}`);
  }

  /** Get one category */
  getOne(categoryId:number){
      return this.httpClient.get<any[]>(`${this.CATG_URL}/${categoryId}`);
  }

  /** Add category */
  add(categoryObj:any){
      return this.httpClient.post<any>(`${this.CATG_URL}`,categoryObj);
  }

  /** Update category */
  update(categoryObj:any){
      return this.httpClient.put<any>(`${this.CATG_URL}`,categoryObj);
  }

  /** Delete category */
  delete(categoryId:number){
      return this.httpClient.delete<any>(`${this.CATG_URL}/${categoryId}`);
  }
}

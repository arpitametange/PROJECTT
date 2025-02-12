import { HttpClient } from '@angular/common/http';
import { booleanAttribute, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
url='http://localhost:3000/user'

  constructor(private http:HttpClient) { }

  get(){
return this.http.get(this.url)
  }

postmethod(body:any){
  return this.http.post(this.url,body)
}
deletemethod(id:any):Observable<any>{
  return this.http.delete(`${this.url}/${id}`)
}
  putmethod(body:any){
    return this.http.put(this.url,body)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  
}

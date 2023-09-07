import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url='http://localhost:3000/data'


  constructor(private http:HttpClient) { }
  headers = new HttpHeaders()
  httpOptions={
  headers:this.headers
  }

  postdata(body:any){
   return this.http.post(`${this.url}`,body)
  }
  getdata(){
    return this.http.get(this.url)
  }

  removedate(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
  updatedata(body:any){
    return this.http.put(`${this.url}/${body.id}`,body)
  }
}

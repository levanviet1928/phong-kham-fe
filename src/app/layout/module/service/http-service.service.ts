import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})



export class HttpServiceService {

  private enpoint = `${environment.localhost}/api/service`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.enpoint)
  }

  getItemById(id: any): Observable<any> {
    return this.http.get(this.enpoint + `/${id}`)
  }

  saveItem(body: any): Observable<any> {
    return this.http.post(this.enpoint, body, httpOptions);
  }

  deleteItem(id: any): Observable<any> {
    return this.http.delete(this.enpoint + `/${id}`)
  }
}

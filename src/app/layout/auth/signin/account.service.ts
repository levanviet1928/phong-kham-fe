import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'api-key': 'top-secret-key'})
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private enpoint = `${environment.localhost}/api/auth`;

  constructor(private http: HttpClient) { }


  login(body: any): Observable<any> {
    return this.http.post(this.enpoint+'/signin', body, httpOptions)
  }
}

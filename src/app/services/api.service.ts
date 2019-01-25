import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = 'http://lafc5.test/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }
  
  setHeaders(token){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token
      })
    };
    return httpOptions;
  }

  getRequest(endpoint, token){
    return this.http.get(url + endpoint, this.setHeaders(token));
  }

  postRequest(endpoint, credentials, token){

    return this.http.post(url+endpoint, credentials, this.setHeaders(token));

  }

  loginRequest(endpoint, credentials){

    let formData: FormData = new FormData();
    formData.append('email', credentials.email);
    formData.append('password', credentials.password);

    return this.http.post(url+endpoint, formData);

  }

}

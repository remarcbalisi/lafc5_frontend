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

  getRequest(endpoint){
    return this.http.get(url + endpoint);
  }

  postRequest(endpoint, credentials, token){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token
      })
    };

    return this.http.post(url+endpoint, credentials, httpOptions);
  }

  loginRequest(endpoint, credentials){

    let formData: FormData = new FormData();
    formData.append('email', credentials.email);
    formData.append('password', credentials.password);

    return this.http.post(url+endpoint, formData);

  }

}

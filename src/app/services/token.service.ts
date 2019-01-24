import { Injectable } from '@angular/core';

const access_token = 'access_token';
const url = 'http://lafc5.test/api/';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: url + 'auth/login',
    signup: url + 'auth/signup'
  }

  constructor() { }

  handle(token){
    this.set(token);
  }

  set(token: any): any {
    localStorage.setItem(access_token, token);
  }

  get(){
    return localStorage.getItem(access_token);
  }

  remove(){
    localStorage.removeItem(access_token);
  }

  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
      return false;
    }
    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject(false);

  constructor(
    private router: Router
  ) { }

  isAuthenticated(){
    return this.authenticationState.value;
  }

  setAuth(state){
    this.authenticationState.next(state);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;

  error : any;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private apiService : ApiService,
    private tokenService: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  ngOnInit() {

  }

  onSubmit() {

    this.loading = true;

    this.apiService.loginRequest('auth/login',this.loginForm.value).subscribe(response=>{
      let resp : any;
      resp = response;
      this.loading = false;
      this.tokenService.set(resp.access_token);
      this.Auth.setAuth(true);
      this.router.navigateByUrl('me');
    }, error=>{
      this.loading = false;
      this.error = {
        message: 'Invalid email/password'
      }
      console.log(error);
    });

  }

}

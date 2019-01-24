import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    private tokenService: TokenService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.loginForm.value);
    this.apiService.loginRequest('auth/login',this.loginForm.value).subscribe(response=>{
      let resp : any;
      resp = response;
      this.tokenService.set(resp.access_token);
    }, error=>{
      this.error = {
        message: 'Invalid email/password'
      }
      console.log(error);
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  token: any;

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.token = this.tokenService.get();
    this.apiService.getRequest('user-list', this.token).subscribe(response=>{
      this.users = response;
    });
  }

}

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
  current_page = 1;
  last_page = 1;

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.token = this.tokenService.get();
    this.apiService.getRequest('user-list', this.token).subscribe(response=>{
      let resp: any;
      resp = response;
      this.users = response;
      this.current_page = resp.current_page;
      this.last_page = resp.last_page;
    });
  }

  goTo(page){
    this.apiService.getRequest('user-list?page='+page, this.token).subscribe(response=>{
      this.users = response;
      this.current_page = page;
    });
  }

  prev(){
    if( this.current_page > 1 ){
      this.current_page--;
      this.apiService.getRequest('user-list?page='+this.current_page, this.token).subscribe(response=>{
        this.users = response;
      });
    }
  }

  next(){
    if( this.current_page < this.last_page ){
      this.current_page++;
      this.apiService.getRequest('user-list?page='+this.current_page, this.token).subscribe(response=>{
        this.users = response;
      });
    }
  }

}

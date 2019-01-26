import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  token: any;
  authUser: Object;

  tabs = [
    {
      title : 'User List',
      id : 'tab1',
      link: 'user-list'
    },
    {
      title : 'Apply Leave',
      id : 'tab2',
      link : ''
    }
  ];

  showTabs = false;

  constructor(
    private auth: AuthService,
    private apiService: ApiService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.jquery();
    
    this.auth.authState().subscribe(state=>{
      this.showTabs = state;
    })

    this.auth.authState().subscribe(state=>{
      if(state){

        this.token = this.tokenService.get();
        this.apiService.getRequest('me', this.token).subscribe(response=>{
          this.authUser = response;
        });
        this.isLoggedIn = state;
        return true;
      }
      this.isLoggedIn = state;
    });
  }

  jquery(){
    $(".button-collapse").sideNav();
  }

}

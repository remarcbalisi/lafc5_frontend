import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  authUser: any;
  token: any;
  tabs = [
    {
      title : 'User List',
      id : 'tab1'
    },
    {
      title : 'Apply Leave',
      id : 'tab2'
    }
  ];

  activeTab = 'tab1';

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.token = this.tokenService.get();
    this.apiService.getRequest('me', this.token).subscribe(response=>{
      this.authUser = response;
    });
  }

  setActiveTab(tab){
    this.activeTab = tab;
  }

}

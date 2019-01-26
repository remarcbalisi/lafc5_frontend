import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TokenService } from 'src/app/services/token.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userId : any;
  user: any;
  token: any;

  constructor(
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserInfo();
  }

  getUserInfo(){
    this.token = this.tokenService.get();
    this.apiService.getRequest('user-info/'+this.userId, this.token).subscribe(response=>{
      this.user = response;
    });
  }

}

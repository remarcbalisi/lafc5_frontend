import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userId : any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
  }

}

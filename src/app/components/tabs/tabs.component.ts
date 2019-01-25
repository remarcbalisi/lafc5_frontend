import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

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

  showTabs = false;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.authState().subscribe(state=>{
      this.showTabs = state;
    })
  }

}

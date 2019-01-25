import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.authState().subscribe(state=>{
      this.isLoggedIn = state;
    });
  }

}

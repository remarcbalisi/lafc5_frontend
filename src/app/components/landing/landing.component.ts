import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.jquery();
  }

  jquery(){
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

}

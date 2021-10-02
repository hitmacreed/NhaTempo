import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  public appPages = [
    { title: 'Home', url: '/', icon: 'cloud' },
  ];

  constructor() { }

  ngOnInit(): void {
  }


}

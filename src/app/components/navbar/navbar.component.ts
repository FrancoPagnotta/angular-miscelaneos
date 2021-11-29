import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNavbar(): void {
    this.navbarCollapsed === false ? this.navbarCollapsed = true : this.navbarCollapsed = false;
  }

}

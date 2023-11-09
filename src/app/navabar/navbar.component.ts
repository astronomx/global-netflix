import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  selectedNavItem: string = 'home';

  ngOnInit() {
    this.selectNavItem('home');
  }

  selectNavItem(item: string): void {
    this.selectedNavItem = item;
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    CommonModule,
    NgHeroiconsModule,
  ]
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
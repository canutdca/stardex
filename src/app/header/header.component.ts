import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  title: string;
  oculto: boolean;
  navMenu: any;
  constructor() { }

  ngOnInit() {
    this.title = 'Star Wars';
    this.oculto = true;
    this.navMenu = document.getElementById('nav-menu-mobile');
  }

  toggleMenu() {
    if (this.oculto === true) {
      this.oculto = false;
      this.navMenu.style.transform = 'translateX(-16px)';
    } else {
      this.oculto = true;
      this.navMenu.style.transform = 'translateX(-340px)';
    }
  }

}

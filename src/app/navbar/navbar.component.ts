import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  closeMenu() {
    this.showMenu = false;
  }
  isActive(route: string): boolean {
    return window.location.pathname === route;
  }
  isActiveWithQuery(route: string): boolean {
    const currentPath = window.location.pathname;
    const currentQuery = window.location.search;
    return currentPath === route && currentQuery === '?';
  }
  isActiveWithQueryAndHash(route: string): boolean {
    const currentPath = window.location.pathname;
    const currentQuery = window.location.search;
    const currentHash = window.location.hash;
    return currentPath === route && currentQuery === '?' && currentHash === '#';
  }
  isActiveWithHash(route: string): boolean {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    return currentPath === route && currentHash === '#';
  }

}

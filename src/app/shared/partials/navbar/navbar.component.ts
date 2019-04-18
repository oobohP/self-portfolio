import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  scrolledState: string;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (event.path[1].scrollY > 40) {
      this.scrolledState = 'notmoved';
    } else if (event.path[1].scrollY === 0) {
      this.scrolledState = 'moved';
    }
  }

  ngOnInit() {
    this.scrolledState = 'moved';
  }
}
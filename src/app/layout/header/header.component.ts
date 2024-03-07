import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  seconde: number = 0;

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe((value: number) => {
      this.seconde = value;
    });
  }

  logOut() {
    localStorage.removeItem('user');
  }
}

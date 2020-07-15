import { Component } from '@angular/core';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ssr';
  spinnerFlag = new Subject();

  constructor() {
  }
  // tslint:disable-next-line: typedef
  ngOnInit() {
    setTimeout(() => {
      this.spinnerFlag.next(true);
    }, 1000);

  }
}

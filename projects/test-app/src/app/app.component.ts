import { Component } from '@angular/core';
import { SiexFakeService } from 'pv.business/siex'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'test-app';

  constructor(siex:SiexFakeService) {
    siex.test();
  }
}

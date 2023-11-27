import { Component } from '@angular/core';
import { SiexFacade } from 'pv.business/siex'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'test-app';

  constructor(siex:SiexFacade) {
    siex.getAllFollowUp().subscribe((f) => console.log('KKKKKKKKK', f))

  }
}

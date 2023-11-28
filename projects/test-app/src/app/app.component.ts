import { Component } from '@angular/core';
import { SiexFacade } from 'pv.business/siex'
import { UserFacade } from 'pv.business/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'test-app';

  constructor(siex:SiexFacade, user:UserFacade) {
    siex.allFollowUp$.subscribe((f) => console.log('KKKKKKKKK', f));

    console.log(`user: ${user.test()}`);
  }
}

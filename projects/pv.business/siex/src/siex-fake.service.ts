import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiexFakeService {

  constructor() { }

  test() {
    console.log('TEST FAKE')
  }
}

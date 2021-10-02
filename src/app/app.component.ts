import { Component } from '@angular/core';
import * as moment from 'moment';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {

    this.initializeApp()
  }

  initializeApp() {
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({ color: '#8DB0F4' })
    moment.locale('pt');

  }
}

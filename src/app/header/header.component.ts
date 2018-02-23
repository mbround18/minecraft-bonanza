import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() serverName: string;
  @Input() bonanzaEventActive: boolean;
  @Output() mapTabActive: EventEmitter<boolean> = new EventEmitter<boolean>();
  public homeTabActive = true;


  constructor() {
  }

  ngOnInit() {
  }

  switchTabs($event) {
    if (this.bonanzaEventActive) {
      this.homeTabActive = $event.toString() === 'home';
      this.mapTabActive.emit(!this.homeTabActive)
    } else {
      UIkit.notification({
        message: 'The map feature is currently disabled! It will be available on launch.',
        status: 'warn',
        pos: 'top-center',
        timeout: 3000
      });
    }
  }

}

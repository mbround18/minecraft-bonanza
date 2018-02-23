import {Component, Input, OnInit} from '@angular/core';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() serverAddress: string;
  @Input() serverName: string;
  @Input() discordUrl: string;
  @Input() bonanzaEventActive: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  serverAddressCopiedtoClipboard() {
    UIkit.notification({
      message: 'Server Address Copied to Clipboard!',
      status: 'primary',
      pos: 'top-center',
      timeout: 3000
    });
  }

}

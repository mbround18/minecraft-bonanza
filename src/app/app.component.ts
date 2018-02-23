import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  serverName = 'Minecraft Bonanza';
  serverAddress = 'mc2.boop.ninja';
  serverMapAddress = 'https://mc2-map.boop.ninja';
  discordUrl = 'https://discord.gg/N3hKcpS';
  homeTabActive = true;
  bonanzaEventStart = new Date('2018-02-24T00:00:00-08:00');
  bonanzaStartInterval = null;
  bonanzaEventActive = false;


  constructor() {
  }

  ngOnInit() {
    this.bonanzaStartInterval = setInterval(() => {
      this.bonanzaEventActive = this.bonanzaEventStart < new Date();
      if (this.bonanzaEventActive) {
        clearInterval(this.bonanzaStartInterval);
      }
    }, 1000);
  }


  switchTabs($event) {
    this.homeTabActive = !$event
  }

}

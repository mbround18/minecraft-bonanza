import {Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() serverMapAddress: SafeResourceUrl;
  failedToLoadMap = false;

  constructor(private domSanitizer: DomSanitizer, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.serverMapAddress = this.domSanitizer.bypassSecurityTrustResourceUrl(this.serverMapAddress.toString());
  }

  showFailedAlert() {
    this.failedToLoadMap = true;
  }
}

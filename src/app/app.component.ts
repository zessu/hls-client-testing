import { Component, EventEmitter, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import { } from 'hls.js';

interface HslVideoItem {
  readonly description: string;
  readonly url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public title = 'hsl-streamer-client-application';
  public loadedVideo = 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8';
  public videoDescription = 'Steve jobs One';

  loadVideo(url: string): void {
    console.log('video url changed');
    this.loadedVideo = url;
  }

  loadDescription(description: string): void {
    console.log('video description changed');
    this.videoDescription = description;
  }

  ngAfterViewInit(): void {
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface HslVideoItem {
  readonly description: string;
  readonly url: string;
}

@Component({
  selector: 'app-hsl-list',
  templateUrl: './hsl-list.component.html',
  styleUrls: ['./hsl-list.component.scss']
})
export class HslListComponent implements OnInit {

  @Output() urlChange = new EventEmitter<string>();
  @Output() description = new EventEmitter<string>();
  public readonly urls: Array<HslVideoItem> = new Array<HslVideoItem>(
    { description: 'steve jobs talk', url: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8'},
    { description: 'motion picture animations', url: 'http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8'},
    { description: 'smoking and cat food ads', url: 'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8'},
  );
  constructor() { }

  ngOnInit(): void {
  }

  playVideo(url: string, description: string): void {
    // pass event to top component, ask app to play
    this.urlChange.emit(url);
    this.description.emit(description);
  }
}

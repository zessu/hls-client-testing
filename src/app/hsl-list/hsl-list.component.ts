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

  @Output() urlChange = new EventEmitter<HslVideoItem>();
  public readonly urls: Array<HslVideoItem> = new Array<HslVideoItem>(
    { description: 'steve jobs one', url: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8'},
    { description: 'steve jobs two', url: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8'},
    { description: 'steve jobs three', url: 'http://devimages.apple.com/iphone/samples/bipbop/gear1/prog_index.m3u8'},
    { description: 'steve jobs four', url: 'http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8'},
    { description: 'steve jobs five', url: 'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8'},
    { description: 'steve jobs five', url: 'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8'},
    { description: 'steve jobs five', url: 'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8'},
    { description: 'steve jobs five', url: 'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8'},
    { description: 'steve jobs five', url: 'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8'},
    { description: 'steve jobs five', url: 'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8'}
  );
  constructor() { }

  ngOnInit(): void {
  }

  playVideo(url: string, description: string): void {
    // pass event to top component, ask app to play
    this.urlChange.emit({
      url,
      description
    });
  }
}

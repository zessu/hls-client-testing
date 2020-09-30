import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HslVideoItem } from '../videoItem.interface';

@Component({
  selector: 'app-hsl-list',
  templateUrl: './hsl-list.component.html',
  styleUrls: ['./hsl-list.component.scss']
})
export class HslListComponent implements OnInit {

  @Output() urlChange = new EventEmitter<string>();
  @Output() description = new EventEmitter<string>();
  public readonly urls: Array<HslVideoItem> = new Array<HslVideoItem>(
    { description: 'Motion Picture Film', url: 'http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8', imageUrl: 'assets/images/disney.png'},
    { description: 'Ads', url: 'http://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8', imageUrl: 'assets/images/ads.png'},
    { description: 'Steve Jobs Presentation', url: 'http://qthttp.apple.com.edgesuite.net/1010qwoeiuryfg/sl.m3u8', imageUrl: 'assets/images/jobs.png'},
  ); // would fetch this from external data source
  constructor() { }

  ngOnInit(): void {
  }

  playVideo(item: HslVideoItem): void  {
    this.urlChange.emit(item.url);
    this.description.emit(item.description);
  }
}

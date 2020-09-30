import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HslVideoItem } from '../videoItem.interface';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() url: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Output() videoSelected = new EventEmitter<HslVideoItem>();
  @Output() descEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  playVideo(): void {
    // pass event to top component, ask app to play
    const item: HslVideoItem = {
      description: this.description,
      url: this.url
    };
    this.videoSelected.emit(item);
  }
}

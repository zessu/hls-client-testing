import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
declare var Hls: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('video', {static: true}) videoComponent: ElementRef;
  private url = '';
  private desc = '';

  get videoUrl(): string {
    return this.url;
  }

  @Input() set videoUrl(val: string) {
    this.url  = val;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.videoUrl);
      hls.attachMedia(this.videoComponent.nativeElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('we are here');
        this.videoComponent.nativeElement.play();
      });
    }
  }

  get videoDescription(): string {
    return this.desc;
  }

  @Input() set videoDescription(description: string) {
    this.desc = description;
  }

  pauseVideo(): void {
    this.videoComponent.nativeElement.pause();
  }

  playVideo(): void {
    this.videoComponent.nativeElement.play();
  }

  constructor() { }

  ngOnInit(): void {
  }

  loadVideo(): void {}
}

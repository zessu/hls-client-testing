import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
declare var Hls: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('video', {static: true}) videoComponent: ElementRef;
  videoPaused  = false;
  correctButton = 'pause';
  currentTime = 0;
  private url = '';
  private desc = '';

  get videoUrl(): string {
    return this.url;
  }

  @Input() set videoUrl(val: string) {
    this.url  = val; //
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.videoUrl);
      hls.attachMedia(this.videoComponent.nativeElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
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

  togglePause(): void {
    if (this.videoPaused) {
      // play video and change icon to pause icon
      this.videoComponent.nativeElement.play();
      this.correctButton = 'pause';
      this.videoPaused = false;
    } else {
      // pause video and change icon to play icon
      this.videoComponent.nativeElement.pause();
      this.correctButton = 'play_arrow';
      this.videoPaused = true;
    }
  }

  forwardVideo(): void {}

  rewindVideo(): void {}

  constructor() { }

  ngOnInit(): void {
  }
}

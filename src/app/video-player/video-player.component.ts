import { Component, Input, ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
declare var Hls: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit {
  constructor(private renderer2: Renderer2) { }
  @ViewChild('videoPlayer', {static: true}) videoComponent: ElementRef;
  @ViewChild('orangeBar', {static: true}) loaderIndicator: ElementRef;
  videoPaused  = false;
  correctButton = 'pause';
  currentTime = 0;
  videoDuration = 0;
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
        this.videoComponent.nativeElement.addEventListener('timeupdate', (event) => {
          const loadingPosition = this.videoComponent.nativeElement.currentTime / this.videoComponent.nativeElement.duration;
          const percentage = `${loadingPosition * 100}%`;
          this.renderer2.setStyle(this.loaderIndicator.nativeElement, 'width', percentage);
        });
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

  ngAfterViewInit(): void {
    console.log(this.loaderIndicator);
  }
}

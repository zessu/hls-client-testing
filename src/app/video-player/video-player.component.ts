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
  currentTime: string;
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
          this.currentTime = this.formatTime(this.videoComponent.nativeElement.currentTime);
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

  formatTime(seconds: number): string {
    const currentTime = Math.floor(seconds);
    if (currentTime < 10) {
      return `00:00:0${currentTime}`;
    } else if (currentTime > 10 && currentTime < 60) {
      return `00:00:${currentTime}`;
    } else if (currentTime > 60 && currentTime < 3600) {
      const dividorWithoutReminder = Math.floor(currentTime / 60);
      const formattedHour = dividorWithoutReminder < 10 ? `0${dividorWithoutReminder}` : dividorWithoutReminder;
      const reminder = currentTime % 60;
      const formattedSecond = reminder < 10 ? `0${reminder}` : reminder;
      return `00:${formattedHour}:${formattedSecond}`;
    } else {
      // todo, add comfirmation for hour
    }
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HslListComponent } from './hsl-list/hsl-list.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    HslListComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

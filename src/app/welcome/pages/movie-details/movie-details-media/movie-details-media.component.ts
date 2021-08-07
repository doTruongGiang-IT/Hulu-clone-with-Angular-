import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/core';

@Component({
  selector: 'app-movie-details-media',
  templateUrl: './movie-details-media.component.html',
  styleUrls: ['./movie-details-media.component.scss']
})
export class MovieDetailsMediaComponent implements OnInit {
  @Input('medias') medias!: any;
  private player!: any;
  private ytEvent!: any;

  constructor() { }

  ngOnInit(): void {
  };

  onStateChange(event: any): void {
    this.ytEvent = event.data;
  };

  savePlayer(player: any): void {
    this.player = player;
  };

  playVideo(): void {
    this.player.playVideo();
  };

  pauseVideo(): void {
    this.player.pauseVideo();
  };

}

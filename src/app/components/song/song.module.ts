import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song.component';
import { SongModel } from 'src/app/model/song.model';

@NgModule({
  declarations: [SongComponent],
  exports: [SongComponent],
  imports: [CommonModule]
})
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongModule implements OnInit {

  @Input() song: SongModel;

  constructor() {
  }

  ngOnInit() {
  }

}

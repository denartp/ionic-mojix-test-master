import { Component, Input, OnInit } from '@angular/core';
import { SongModel } from '../../model/song.model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  @Input() song: SongModel;
  @Input() index: number;
  color: string = "";

  constructor() {
  }

  ngOnInit() {
    if (this.isPrime(this.index)) {
      this.color = 'custom-gray'
    } else {
      this.color = 'custom-gray2'
    }
  }

  isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    };
    return true;
  }

}

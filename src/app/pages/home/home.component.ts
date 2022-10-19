import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SongResponse } from 'src/app/model/song.model';
import { ApiService } from 'src/app/services/api/api.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  songs: SongResponse;
  textToSearch: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.loadSongs();
  }

  async search(event) {
    this.textToSearch = event.target.value;
    this.loadSongs(this.textToSearch);
  }

  ngAfterViewInit(): void {
  }

  loadSongs(artist: string = 'Vicente', media: string = 'musicVideo'/* Or movie */) {
    this.apiService.searchSongs(artist, media).subscribe(
      (data: SongResponse) => {
        this.songs = data;
      },
      error => {
        console.error('searchSongs.error', error);
      }
    )
      ;
  }
}

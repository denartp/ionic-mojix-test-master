import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SongModel, SongResponse } from 'src/app/model/song.model';
import { ApiService } from 'src/app/services/api/api.service';
import { debounceTime } from 'rxjs/operators';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(IonInfiniteScroll, { static: false }) infinityScroll: IonInfiniteScroll;

  songs: SongModel[] = [];
  textToSearch: string = '';
  showSkeleton: boolean = true;
  private offset: number = 0;
  private limit: number = environment.apiLimit;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.loadSongs();
  }

  ionViewWillLeave() {
    this.showSkeleton = true;
  }

  async search(event) {
    if (event.cancelable) event.preventDefault();
    this.songs = [];
    this.offset = 0;
    this.textToSearch = event.target.value;
    if (this.infinityScroll) {
      this.infinityScroll.disabled = false;
    }
    this.showSkeleton = true;
    this.loadSongs();
  }

  ngAfterViewInit(): void {
  }

  loadSongs(event?, search: string = 'Vicente', media: string = 'music') {
    if (this.textToSearch) {
      search = this.textToSearch;
    }
    this.apiService.searchSongs(search, media, this.offset, this.limit).subscribe(
      (data: SongResponse) => {
        if (data.results.length > 0) {
          this.songs = this.songs.concat(data.results);
        } else {
          this.infinityScroll.disabled = true;
        }
        if (event) {
          event.target.complete();
        }
        this.showSkeleton = false;
      },
      error => {
        console.error('searchSongs.error', error);
        if (event) {
          event.target.complete();
        }
        this.showSkeleton = false;
      }
    )
      ;
  }

  loadMore(event) {
    if (event.cancelable) event.preventDefault();
    this.offset += this.limit;
    this.loadSongs(event);
  }
}

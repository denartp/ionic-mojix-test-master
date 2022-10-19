import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SongModel, SongResponse } from 'src/app/model/song.model';
import { ApiService } from 'src/app/services/api/api.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

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
  isVideo: boolean = true;
  private offset: number = 0;
  private limit: number = environment.apiLimit;

  constructor(private apiService: ApiService, private stateService: StateService) {
    if (this.stateService.getMediaType() == environment.musicVideoMedia) {
      this.isVideo = true;
    } else {
      this.isVideo = false;
    }
  }

  ngOnInit() {
    this.loadSongs();
  }

  ionViewWillLeave() {
    this.showSkeleton = true;
  }

  resetInfo() {
    this.songs = [];
    this.offset = 0;
    if (this.infinityScroll) {
      this.infinityScroll.disabled = false;
    }
    this.showSkeleton = true;
  }

  async search(event) {
    if (event.cancelable) event.preventDefault();
    this.resetInfo();
    this.textToSearch = event.target.value;
    this.loadSongs();
  }

  ngAfterViewInit(): void {
  }

  loadSongs(event?, search: string = 'Vicente') {
    if (this.textToSearch) {
      search = this.textToSearch;
    }
    this.apiService.searchSongs(search, this.offset, this.limit).subscribe(
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

  toggleChange(event) {
    if (event.detail.checked) {
      this.stateService.setMediaType(environment.musicVideoMedia);
    } else {
      this.stateService.setMediaType(environment.musicMedia);
    }
    this.resetInfo();
    this.loadSongs();
  }
}

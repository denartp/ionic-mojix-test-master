import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SongResponse } from '../../model/song.model';
import { delay, retryWhen, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private stateService: StateService) {
  }

  searchSongs(search: string, offset: number, limit: number): Observable<SongResponse> {
    const media: string = this.stateService.getMediaType();
    const path = `${environment.api}/search?term=${search}&media=${media}&offset=${offset}&limit=${limit}`;
    return this.http.get<SongResponse>(path).pipe(
      retryWhen(error => error.pipe(
        delay(3000),
        take(3)
      ))
    );
  }
}

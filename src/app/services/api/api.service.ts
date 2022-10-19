import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SongResponse } from '../../model/song.model';
import { delay, retryWhen, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  searchSongs(search: string, media: string): Observable<SongResponse> {
    const path = `${environment.api}/search?term=${search}&media=${media}`;
    return this.http.get<SongResponse>(path).pipe(
      retryWhen(error => error.pipe(
        delay(3000),
        take(3)
      ))
    );
  }
}

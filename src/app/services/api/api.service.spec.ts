import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { SongResponse } from 'src/app/model/song.model';
import { generateResponse } from 'src/app/model/song.mock';
import { environment } from 'src/environments/environment';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    apiService = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  describe('test for searchSongs', () => {
    it('should return a song list', (doneFn) => {
      const mockData: SongResponse = generateResponse(15);
      const search: string = 's';
      const offset: number = 0;
      const limit: number = 15;
      const media: string = environment.musicMedia;
      apiService.searchSongs(search, offset, limit).subscribe((data) => {
        expect(data.resultCount).toEqual(mockData.resultCount);
        expect(data).toEqual(mockData);
        doneFn();
      });
      const url = `${environment.api}/search?term=${search}&media=${media}&offset=${offset}&limit=${limit}`;
      const req = httpController.expectOne(url);
      req.flush(mockData);
      httpController.verify;
    });
  });
});

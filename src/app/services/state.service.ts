import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const MEDIA_KEY = 'mojix_app_media';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  setMediaType(media: string) {
    localStorage.setItem(MEDIA_KEY, media);
  }

  getMediaType(): string {
    const media: string = localStorage.getItem(MEDIA_KEY);
    if (media) return media;
    return environment.musicMedia;
  }

}

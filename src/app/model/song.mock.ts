import { SongModel, SongResponse } from './song.model';

export const generateOneSong = (): SongModel => {
  return {
    wrapperType: 'string',
    kind: 'string',
    artistId: 1,
    trackId: 1,
    artistName: 'string',
    trackName: 'string',
    collectionPrice: 50,
    trackPrice: 5,
    releaseDate: 'string',
    collectionExplicitness: 'string',
    trackExplicitness: 'string',
    trackTimeMillis: 30000,
    country: 'string',
    currency: 'string',
    primaryGenreName: 'string',
    artworkUrl100: 'string',
  };
};

export const generateResponse = (size = 15): SongResponse => {
  const songs: SongModel[] = [];
  for (let index = 0; index < size; index++) {
    songs.push(generateOneSong());
  }
  return {
    resultCount: size,
    results: songs,
  };
};

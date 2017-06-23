
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDCgEfJufpBJlEKSNfTsRdQfW4e4soPspU';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'
export const FETCH_VIDEO = 'FETCH_VIDEO'
export const VIDEO_SELECTED = 'VIDEO_SELECTED'

export function fetchVideo(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    console.log(data)
  });
}


export function selectVideo(video) {

//selectVideo is an ActionCreator, it needs to return an action,
//an object with a type property
  return {
    type: VIDEO_SELECTED,
    payload: video
  };
}

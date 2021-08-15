import axios from 'axios';

const KEY = 'AIzaSyBXS0HHiuF9dPDeNOlUi8wmKGpZbNm6CI8';

// fetch videos from API Youtube Data v3
export const youtubeConn = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY,
    },
});
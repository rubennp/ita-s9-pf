import axios from 'axios';

const KEY = 'AIzaSyBXS0HHiuF9dPDeNOlUi8wmKGpZbNm6CI8';

// fetch videos from API Youtube Data v3
const youtube = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 10,
      key: KEY,
    },
});

const params = (func, param = '') => {
  switch(func) {
    case 'SEARCH':
      return ({ 
        params: { 
          q: param 
        } 
      });
    case 'RELATED':
      return ({ 
        params: { 
          type: "video", 
          relatedToVideoId: param 
        } 
      });
    case 'POPULAR': 
      return ({ 
        params: { 
          chart: "mostPopular", 
          region: "es", 
          videoCategory: 28 
        } 
      });
    default:
      return false;
  }
};

export const getYTRes = async (func, param) => {
  console.log("YT Connection");
  try {
    const res = await youtube.get('/search/', params(func, param));
    return await res.data;
  } catch(err) {
    console.error(err);
  }
};
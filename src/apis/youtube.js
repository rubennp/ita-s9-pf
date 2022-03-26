import axios from 'axios';

const KEY = 'secret';

// fetch videos from API Youtube Data v3
const youtube = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 10,
      videoDefinition: 'standard',
      videoDimension: '2d',
      type: 'video',
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
          regionCode: "es", 
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
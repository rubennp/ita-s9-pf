import { useEffect, useState } from 'react';

import { youtube } from '../apis/youtube';

// ... para tener algun dato con el que poder "trabajar" por problemas con la cuota en la API de youtube ...
const myRes = {
    count: 10,
    items: 
    [
        { snippet: { title: "My React video" } },
        { snippet: { title: "My Javascript video" } },
        { snippet: { title: "My JS video video" } },
        { snippet: { title: "My ReactJS video" } },
        { snippet: { title: "My ES6 video funny title" } },
        { snippet: { title: "My Vue.js video" } },
        { snippet: { title: "My new video" } },
        { snippet: { title: "My last videocast" } },
        { snippet: { title: "My best video" } },
        { snippet: { title: "My new video about JS" } }, 
    ]
};
// search response:
// {
//     "kind": "youtube#searchResult",
//     "etag": etag,
//     "id": {
//       "kind": string,
//       "videoId": string,
//       "channelId": string,
//       "playlistId": string
//     },
//     "snippet": {
//       "publishedAt": datetime,
//       "channelId": string,
//       "title": string,
//       "description": string,
//       "thumbnails": {
//         (key): {
//           "url": string,
//           "width": unsigned integer,
//           "height": unsigned integer
//         }
//       },
//       "channelTitle": string
//     }
//   }

const filteredItems = search => {
    return myRes.items.filter(item => item.snippet.title.includes(search));
};

const useGetVideoList = search => {
    const [videoList, setVideoList] = useState(null);

    const getVideos = async () => {
        try {
            // const res = await youtube.get('/search/', {
            //     params: {
            //       q: search,
            //     }
            // });
            // const data = await res.data;
            // setVideoList(data);
            
            // ... PROBLEMS with Youtube API v3 quota ...
            setVideoList({...myRes, items: filteredItems(search) });
        } catch(err) {
            console.error(err);
            setVideoList({...myRes, items: filteredItems(search) });
        }
    };

    useEffect(() => {
        getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    
    return videoList;
};

export default useGetVideoList;
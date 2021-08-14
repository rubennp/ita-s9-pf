import { useEffect, useState } from 'react';

// import { youtube } from '../apis/youtube';
import * as myapi from '../apis/myapi';

const saveOnLocalStorage = data => {
    const onLocalStorage = JSON.parse(localStorage.getItem('reactube-res'));

    if (!onLocalStorage) localStorage.setItem('reactube-res', JSON.stringify([data]));
    else localStorage.setItem('reactube-res', JSON.stringify([...onLocalStorage, data]));
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
            setVideoList({...myapi.response, items: myapi.filteredItems(search) });
        } catch(err) {
            console.error(err);
            setVideoList({...myapi.response, items: myapi.filteredItems(search) });
        }
    };

    useEffect(() => {
        getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);
    
    useEffect(() => {
        if (videoList) saveOnLocalStorage(videoList);
    }, [videoList]);

    return videoList;
};

export default useGetVideoList;
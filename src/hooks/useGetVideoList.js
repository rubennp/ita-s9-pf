import { useEffect, useState } from 'react';

import { getYTRes } from '../apis/youtube';
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
            const ytRes = await getYTRes('SEARCH', search);
            if (!ytRes) throw new Error("Fallo en conexión con YouTube");
            setVideoList(ytRes);
        } catch(err) {
            console.error(err.message);
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
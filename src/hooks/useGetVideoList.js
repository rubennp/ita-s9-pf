import { useEffect, useState } from 'react';

// import { getYTRes } from '../apis/youtube';
import * as myapi from '../apis/myapi';

const saveOnLocalStorage = data => {
    const onLocalStorage = JSON.parse(localStorage.getItem('reactube-res'));

    if (!onLocalStorage) localStorage.setItem('reactube-res', JSON.stringify([data]));
    else localStorage.setItem('reactube-res', JSON.stringify([...onLocalStorage, data]));
};

const useGetVideoList = (from) => {
    const [videoList, setVideoList] = useState(null);

    const getVideos = async (from) => {
        switch(from.action) {
            case 'SEARCH':
                    // try {
                    //     const ytRes = await getYTRes('SEARCH', from.search);
                    //     if (!ytRes) throw new Error("Failed YouTube's Connection");
                    //     setVideoList(ytRes);
                    // } catch(err) {
                    //     console.error(err.message);
                    // }

                    // try {
                    //     const ytRes = from.search !== '' ? 
                    //         await getYTRes('SEARCH', from.search) :
                    //         await getYTRes('POPULAR');
                    //         if (!ytRes) throw new Error("Failed YouTube's Connection");
                    //         setVideoList(ytRes);
                    // } catch(err) {
                    //     console.error(err.message);
                    // }
                if (from.search !== '') setVideoList({...myapi.searchRes, items: myapi.filteredItems(from.search) });
                else setVideoList({...myapi.recommendedRes, items: myapi.recommendedRes.items});
                break;
            case 'RECOMMENDED':
                // try {
                //     const ytRes = await getYTRes('POPULAR');
                //     if (!ytRes) throw new Error("Failed YouTube's Connection");
                //     setVideoList(ytRes);
                // } catch(err) {
                //     console.error(err.message);
                // }
                setVideoList({...myapi.recommendedRes, items: myapi.recommendedRes.items});
                break;
            default:
                break;
        }
        // try {
        //     const ytRes = await getYTRes('SEARCH', search);
        //     if (!ytRes) throw new Error("Failed YouTube's Connection");
        //     setVideoList(ytRes);
        // } catch(err) {
            // console.error(err.message);
            // setVideoList({...myapi.searchRes, items: myapi.filteredItems(search) });
        // }
    };

    useEffect(() => {
        getVideos(from);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [from.action, from.search]);
    
    // useEffect(() => {
    //     if (videoList) saveOnLocalStorage(videoList);
    // }, [videoList]);

    return videoList;
};

export default useGetVideoList;
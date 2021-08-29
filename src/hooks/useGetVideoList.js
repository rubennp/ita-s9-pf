import { useEffect, useState } from 'react';

import { getYTRes } from '../apis/youtube';

/*
 * useGetVideoList() : Hook = manages fetches data from youtube
 */
const useGetVideoList = (from) => {
    const [videoList, setVideoList] = useState(null);
    const [popular, setPopular] = useState(null);

    const getVideos = async (from) => {
        switch(from.action) {
            case 'SEARCH':       
                try {
                    const what = from.search === '' ? 'POPULAR' : 'SEARCH';
                    const ytRes = !popular || what === 'SEARCH' ? await getYTRes(what, from.search) : [...popular];
                    if (!ytRes) throw new Error("Failed YouTube's Connection");

                    if (popular && what === 'POPULAR') setVideoList(popular);
                    else {
                        setVideoList(ytRes.items.filter(item => item.snippet).map(item => {
                            return what === 'SEARCH' ?
                            { id: item.id.videoId, snippet: {...item.snippet} }
                            :
                            { id: item.id, snippet: item.snippet };
                        }));
                    }
                } catch(err) {
                    console.error(err.message);
                }
                break;
            case 'RELATED':
                if (from.video) {
                    try {
                        const ytRes = await getYTRes('RELATED', from.video.id);
                        if (!ytRes) throw new Error("Failed YouTube's Connection");
                        setVideoList(ytRes.items.filter(item => item.snippet).map(item => {
                            return { id: item.id.videoId, snippet: item.snippet };
                        }));
                    } catch(err) {
                        console.error(err.message);
                    }
                } else return null;
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        getVideos(from);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [from.action, from.search, from.video]);
    
    useEffect(() => {
        if (from.search === '' && !popular) setPopular(videoList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoList]);

    return from.action === 'RELATED' ? videoList : [videoList, popular];
};

export default useGetVideoList;
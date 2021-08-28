import { useEffect, useState } from 'react';

import { getYTRes } from '../apis/youtube';
// import * as myapi from '../apis/myapi';

const useGetVideoList = (from) => {
    const [videoList, setVideoList] = useState(null);
    const [recommended, setRecommended] = useState(null);

    const getVideos = async (from) => {
        switch(from.action) {
            case 'SEARCH':       
                try {
                    const what = from.search === '' ? 'POPULAR' : 'SEARCH';
                    const ytRes = !recommended || what === 'SEARCH' ? await getYTRes(what, from.search) : recommended;
                    if (!ytRes) throw new Error("Failed YouTube's Connection");

                    setVideoList(ytRes.items.filter(item => item.snippet).map(item => {
                        return what === 'SEARCH' ?
                        { id: item.id.videoId, snippet: {...item.snippet} }
                        :
                        { id: item.id, snippet: item.snippet };
                    }));

                    if (!recommended && what === 'POPULAR')
                        setRecommended(videoList);
                } catch(err) {
                    console.error(err.message);
                }
                // if (from.search !== '') {
                //     setVideoList(myapi.filteredItems(from.search));
                // } else {
                //     setVideoList(myapi.recommendedRes.items.map(item => {
                //             return { id: item.id, snippet: item.snippet};
                //         })
                //     );
                // }
                break;
            case 'RELATED':
                try {
                    const ytRes = await getYTRes('RELATED', from.video);
                    if (!ytRes) throw new Error("Failed YouTube's Connection");
                    setVideoList(ytRes.items.filter(item => item.snippet).map(item => {
                        return { id: item.id.videoId, snippet: item.snippet };
                    }));
                } catch(err) {
                    console.error(err.message);
                }
                // setVideoList(myapi.relatedRes.items.map(item => {
                //         return { id: item.id.videoId, snippet: item.snippet };
                //     })
                // );
                break;
            case 'RECOMMENDED':
                return recommended;
                // setVideoList(myapi.recommendedRes.items.map(item => {
                //         return { id: item.id, snippet: item.snippet};
                //     })
                // );
                // break;
            default:
                break;
        }
    };

    useEffect(() => {
        getVideos(from);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [from.action, from.search]);

    return videoList;
};

export default useGetVideoList;
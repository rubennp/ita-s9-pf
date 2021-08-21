import { useEffect, useState } from 'react';

import { Heart, HeartFill } from 'react-bootstrap-icons';

const ButtonLike = ({video, videoLiked, handleVideoLiked}) => {
    const [like, setLike] = useState(false);

    useEffect(function isLiked() {
        setLike(false);
        if (videoLiked) videoLiked.forEach(v => {
            if (v.id === video.id) setLike(true);
        });
    }, [video.id, videoLiked]);

    return (
        <button type="button" onClick={() => {
            handleVideoLiked(video, !like);
        }}>
            {like ?
            <HeartFill color="red" size={16}/>
            :
            <Heart color="red" size={16}/>
            }
        </button>
    );
};

export default ButtonLike;
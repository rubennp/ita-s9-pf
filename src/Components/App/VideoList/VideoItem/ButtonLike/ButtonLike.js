import { useState } from 'react';

import { Heart, HeartFill } from 'react-bootstrap-icons';

const ButtonLike = () => {
    const [liked, setLiked] = useState(false);

    return (
        <button type="button" onClick={() => setLiked(prev => !prev)}>
            {liked ?
            <HeartFill color="red" size={16}/>
            :
            <Heart color="red" size={16}/>
            }
        </button>
    );
};

export default ButtonLike;
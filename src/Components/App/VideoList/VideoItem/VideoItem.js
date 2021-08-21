import { useEffect, useState } from 'react';

import Moment from 'react-moment';

import { Item, Info } from './VideoItem.styled';
import { Card } from 'react-bootstrap';
import { Heart, HeartFill } from 'react-bootstrap-icons';

import onErrorVidImg from '../../../../assets/img/default-video-thumbnail.jpeg';

const VideoItem = ({video, handleVideoSelect}) => {
    const [liked, setLiked] = useState(false);

    return (
        <Item as="li">
            <Card>
                <Card.Img onClick={()=> {
                    handleVideoSelect(video);
                }}variant="top" src={video.snippet.thumbnails.high.url} onError={e => {e.target.src = `${onErrorVidImg}`}}/>
                <Card.Body>
                    <Card.Title>{video.snippet.title}</Card.Title>
                    <Info>
                        <div className="time"><Moment fromNow>{video.snippet.publishedAt}</Moment></div>
                        <div className="like">
                            <button type="button" onClick={() => setLiked(prev => !prev)}>
                                {liked ?
                                <HeartFill color="red" size={16}/>
                                :
                                <Heart color="red" size={16}/>
                                }
                            </button>
                        </div>
                    </Info>
                </Card.Body>
            </Card>
        </Item>
    );
};

export default VideoItem;
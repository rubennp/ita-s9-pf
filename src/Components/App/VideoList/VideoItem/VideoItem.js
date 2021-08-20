import { Item, Info } from './VideoItem.styled';
import { Card } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';

import onErrorVidImg from '../../../../assets/img/default-video-thumbnail.jpeg';

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <Item onClick={()=> {
            handleVideoSelect(video);
        }} as="li">
            <Card>
                <Card.Img variant="top" src={video.snippet.thumbnails.high.url} onError={e => {e.target.src = `${onErrorVidImg}`}}/>
                <Card.Body>
                    <Card.Title>{video.snippet.title}</Card.Title>
                    <Info>
                        <div className="time">X time ago</div>
                        <div className="like"><Heart color="red" size={16} /></div>
                    </Info>
                </Card.Body>
            </Card>
        </Item>
    );
};

export default VideoItem;
import { Item } from './VideoItem.styled';
import { Card } from 'react-bootstrap';

import onErrorVidImg from '../../../../assets/img/default-video-thumbnail.jpeg';

const VideoItem = ({video, idx, handleVideoSelect}) => {
    return (
        <Item onClick={() => handleVideoSelect(idx)}>
            <Card>
                <Card.Img variant="top" src="default" onError={e => {
                    e.target.src = `${onErrorVidImg}`}}/>
                <Card.Body>
                    <Card.Title>{video.snippet.title}</Card.Title>
                </Card.Body>
            </Card>
        </Item>
    );
};

export default VideoItem;
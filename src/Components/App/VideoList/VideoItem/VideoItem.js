import Moment from 'react-moment';

// Components
import ButtonLike from './ButtonLike';
import { Card } from 'react-bootstrap';

// Styled Components
import { Item, Info } from './VideoItem.styled';



import onErrorVidImg from '../../../../assets/img/default-video-thumbnail.jpeg';

const VideoItem = ({video, handleVideoSelect, videoLiked, handleVideoLiked}) => {
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
                            <ButtonLike
                                video={video}
                                videoLiked={videoLiked} 
                                handleVideoLiked={handleVideoLiked}
                            />
                        </div>
                    </Info>
                </Card.Body>
            </Card>
        </Item>
    );
};

export default VideoItem;
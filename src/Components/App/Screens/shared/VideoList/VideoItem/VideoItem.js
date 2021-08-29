import Moment from 'react-moment';

// Components
import ButtonLike from './ButtonLike';
import { Card } from 'react-bootstrap';

// Styled Components
import { Item, Info, Overlay } from './VideoItem.styled';

// Img & Icons
import onErrorVidImg from '../../../../../../assets/img/default-video-thumbnail.jpeg';
import { Eye } from 'react-bootstrap-icons';

/*
 * VideoItem() : Component = manages items on video lists.
 */
const VideoItem = ({
    fromLastViewed,
    page, 
    favorites,
    fromSearches,
    video, 
    handleVideoSelect, 
    videoLiked, 
    handleVideoLiked
}) => {
    return (
        <Item page={page} favorites={favorites} as="li">
            <Card>
                <Card.Img onClick={()=> {
                    handleVideoSelect(video);
                }} variant="top" src={video.snippet.thumbnails.high.url} onError={e => {e.target.src = `${onErrorVidImg}`}}/>
                {favorites ?
                    <Overlay>
                        <ButtonLike
                            favorites
                            video={video}
                            videoLiked={videoLiked}
                            handleVideoLiked={handleVideoLiked}
                        />
                    </Overlay>
                    :
                    <Card.Body>
                        <Card.Title>{video.snippet.title}</Card.Title>
                        <Info>
                            <div className="time">
                                {fromLastViewed && <Eye size={16} />}
                                {fromSearches && <h3>from "{fromSearches}"</h3>}
                                {!fromSearches && <Moment fromNow>{fromLastViewed ? fromLastViewed : video.snippet.publishedAt}</Moment>}
                            </div>
                            <div className="like">
                                <ButtonLike
                                    video={video}
                                    videoLiked={videoLiked} 
                                    handleVideoLiked={handleVideoLiked}
                                />
                            </div>
                        </Info>
                    </Card.Body> 
                }
            </Card>
        </Item>
    );
};

export default VideoItem;
// Components
import VideoItem from './VideoItem';

// Styled Components
import { List } from './VideoList.styled';

/*
 * VideoList(): component. Controls the lists of videos.
 */
const VideoList = ({
    fromLastViewed,
    page, 
    favorites, 
    list, 
    handleVideoSelect, 
    videoLiked, 
    handleVideoLiked
}) => {
    console.log(list);
    return (
        <List page={page} favorites={favorites} videoLiked={videoLiked} variant="flush" as="ul">
            {(favorites && list.length === 0) &&
                <small>{"You don't have any liked video, yet!"}</small>
            }
            {list && list.map((video, idx) => {
                return !fromLastViewed ? 
                (
                    <VideoItem
                        page={page}
                        favorites={favorites}
                        key={idx} 
                        video={video} 
                        handleVideoSelect={handleVideoSelect} 
                        videoLiked={page ? list : videoLiked} 
                        handleVideoLiked={handleVideoLiked}
                    />
                )
                :
                    <VideoItem 
                        fromLastViewed={video.viewedAt}
                        key={idx}
                        video={video.video}
                        handleVideoSelect={handleVideoSelect}
                        videoLiked={videoLiked}
                        handleVideoLiked={handleVideoLiked}
                    />
                ;
            })}
        </List>
    );
};

export default VideoList;
// Components
import VideoItem from './VideoItem';

// Styled Components
import { List } from './VideoList.styled';

/*
 * VideoList(): Component = manages the differents lists of videos.
 */
const VideoList = ({
    fromLastViewed,
    page, 
    favorites,
    fromSearches,
    list, 
    handleVideoSelect, 
    videoLiked, 
    handleVideoLiked
}) => {
    return (
        <List page={page} favorites={favorites} videoLiked={videoLiked} variant="flush" as="ul">
            {(favorites && list.length === 0) &&
                <small>{"You don't have any liked video, yet!"}</small>
            }
            {list && list.map((video, idx) => {
                if (fromLastViewed) {
                    return <VideoItem 
                        fromLastViewed={video.viewedAt}
                        key={idx}
                        video={video.video}
                        handleVideoSelect={handleVideoSelect}
                        videoLiked={videoLiked}
                        handleVideoLiked={handleVideoLiked}
                    />;
                } else if (fromSearches) {
                    return <VideoItem 
                        fromSearches={video.search}
                        key={idx}
                        video={video.video}
                        handleVideoSelect={handleVideoSelect}
                        videoLiked={videoLiked}
                        handleVideoLiked={handleVideoLiked}
                    />;
                } else {
                    return <VideoItem
                        page={page}
                        favorites={favorites}
                        key={idx} 
                        video={video} 
                        handleVideoSelect={handleVideoSelect} 
                        videoLiked={page ? list : videoLiked} 
                        handleVideoLiked={handleVideoLiked}
                    />;
                }
            })}
        </List>
    );
};

export default VideoList;
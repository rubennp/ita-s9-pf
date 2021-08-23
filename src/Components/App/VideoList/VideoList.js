// Components
import VideoItem from './VideoItem';

// Styled Components
import { List } from './VideoList.styled';

const VideoList = ({page, favorites, list, handleVideoSelect, videoLiked, handleVideoLiked}) => {
    return (
        <List page={page} favorites={favorites} videoLiked={videoLiked} variant="flush" as="ul">
            {(favorites && list.length === 0) &&
                <small>{"You don't have any liked video, yet!"}</small>
            }
            {list.map((video, idx) => {
                return (
                    <VideoItem
                        page={page}
                        favorites={favorites}
                        key={idx} 
                        video={video} 
                        handleVideoSelect={handleVideoSelect} 
                        videoLiked={page ? list : videoLiked} 
                        handleVideoLiked={handleVideoLiked}
                    />
                );
            })}
        </List>
    );
};

export default VideoList;
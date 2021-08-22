// Components
import VideoItem from './VideoItem';

// Styled Components
import { List } from './VideoList.styled';

const VideoList = ({favorites, list, handleVideoSelect, videoLiked, handleVideoLiked}) => {
    return (
        <List favorites={favorites} variant="flush" as="ul">
            {list.map((video, idx) => {
                return (
                    <VideoItem 
                        favorites={favorites}
                        key={idx} 
                        video={video} 
                        handleVideoSelect={handleVideoSelect} 
                        videoLiked={videoLiked} 
                        handleVideoLiked={handleVideoLiked}
                    />
                );
            })}
        </List>
    );
};

export default VideoList;
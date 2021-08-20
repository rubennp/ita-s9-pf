// Components
import VideoItem from './VideoItem';

// Styled Components
import { List } from './VideoList.styled';

const VideoList = ({list, handleVideoSelect}) => {
    return (
        <List variant="flush" as="ul">
            {list.map((video, idx) => <VideoItem key={idx} video={video} handleVideoSelect={handleVideoSelect}/>)}
        </List>
    );
};

export default VideoList;
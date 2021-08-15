// Components
import VideoItem from './VideoItem';

// Styled Components
import { List } from './VideoList.styled';

const VideoList = ({list, handleVideoSelect}) => {
    return (
        <List className="m-1 p-2" variant="flush">
            {list.map((video, idx) => <VideoItem key={idx} video={video} idx={idx} handleVideoSelect={handleVideoSelect}/>)}
        </List>
    );
};

export default VideoList;
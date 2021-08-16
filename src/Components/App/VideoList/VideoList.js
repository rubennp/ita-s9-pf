// Components
import VideoItem from './VideoItem';

// Styled Components
import { List } from './VideoList.styled';

const VideoList = ({list, handleVideoSelect}) => {
    return (
        <>
            <h4 className="video-list-title">Video List:</h4> {/* only mobile */}
            <List variant="flush" as="ul">
                {list.map((video, idx) => <VideoItem key={idx} video={video} idx={idx} handleVideoSelect={handleVideoSelect}/>)}
            </List>
        </>
    );
};

export default VideoList;
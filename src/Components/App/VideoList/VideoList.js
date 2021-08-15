import { List } from './VideoList.styled';

const VideoList = ({list, handleVideoSelect}) => {
    return (
        <List className="m-1 p-2" variant="flush">
            {list.map((video, idx) => <List.Item key={idx} onClick={() => handleVideoSelect(idx)}>{video.snippet.title}</List.Item>)}
        </List>
    );
};

export default VideoList;
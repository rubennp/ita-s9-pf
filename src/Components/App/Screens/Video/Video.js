import { Container, Related } from './Video.styled.js';

import VideoDetail from './VideoDetail';
import VideoList from '../shared/VideoList';

/*
 * Video(): Component = Video's Screen
 */
const Video = ({
    selected,
    related,
    handleVideoSelect, 
    videoLiked, 
    handleVideoLiked
}) => {    
    return (
        <Container>
            <VideoDetail 
                video={selected}
                videoLiked={videoLiked}
                handleVideoLiked={handleVideoLiked}
            />
            <Related>
                <h3>Related</h3>
                {related && 
                    <VideoList 
                        list={related} 
                        handleVideoSelect={handleVideoSelect} 
                        videoLiked={videoLiked} 
                        handleVideoLiked={handleVideoLiked}
                    /> 
                }
            </Related>
        </Container>
    );
};

export default Video;
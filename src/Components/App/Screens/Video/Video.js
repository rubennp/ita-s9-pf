import useGetVideoList from '../../../../hooks/useGetVideoList.js';

import { Container, Related } from './Video.styled.js';

import VideoDetail from './VideoDetail';
import VideoList from '../../VideoList';

/*
 * Video(): Component = Video screen
 */
const Video = ({
    selected, 
    handleVideoSelect, 
    videoLiked, 
    handleVideoLiked
}) => {
    const related = useGetVideoList({action: 'RELATED', video: selected.id}, [selected]);
    
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
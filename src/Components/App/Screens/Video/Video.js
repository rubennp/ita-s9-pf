import useGetVideoList from '../../../../hooks/useGetVideoList.js';

import { Container, Detail, Related } from './Video.styled.js';

import VideoDetail from './VideoDetail';
import VideoList from '../../VideoList';

const Video = ({selected, handleVideoSelect}) => {
    const related = useGetVideoList({action: 'RELATED', video: selected}, [selected]);

    return (
        <Container>
            <VideoDetail video={selected} />
            <Related>
                <h3>Related</h3>
                {related && <VideoList list={related.items} handleVideoSelect={handleVideoSelect} /> }
            </Related>
        </Container>
    );
};

export default Video;
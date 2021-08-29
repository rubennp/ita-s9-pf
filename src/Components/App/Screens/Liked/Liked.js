import VideoList from '../../VideoList';

import { Container } from './Liked.styled';

/*
 * Liked() : Component = Liked videos' Screen
 */
const Liked = ({list, handleVideoLiked, handleVideoSelect}) => {
    return (
        <Container list={list}>
            { list.length === 0 ? 
                <>
                    <h3>Nothing to show you.</h3>
                    <h3><small>You don't have any liked video, yet!</small></h3> 
                </>
                :
                <h3>You have {list.length} video{list.length > 1 ? 's' : ''} you like:</h3>
            }
            { list.length > 0 &&
                <div>
                    <VideoList page list={list} handleVideoSelect={handleVideoSelect} handleVideoLiked={handleVideoLiked}/>
                </div>
            }
        </Container>
    );
};

export default Liked;
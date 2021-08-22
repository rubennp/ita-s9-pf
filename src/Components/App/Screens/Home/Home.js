import { Container, RecommendedOrSearched, LastViewed, Favorites } from "./Home.styled";

import VideoList from '../../VideoList';

const Home = ({search, list, handleSelect, videoLiked, handleVideoLiked}) => {
    return (
        <Container>
            <RecommendedOrSearched>
                <h3>{search === '' ? "Recommended" : "Searched"}  videos</h3>
                <VideoList
                    list={list.items} 
                    handleVideoSelect={handleSelect} 
                    videoLiked={videoLiked} 
                    handleVideoLiked={handleVideoLiked} 
                />
            </RecommendedOrSearched>
            <LastViewed>
                <h3>Last searches</h3>
            </LastViewed>
            <Favorites>
                <h3>Favorites videos · {videoLiked.length}</h3>
                <VideoList
                    favorites                    
                    list={videoLiked}
                    handleVideoSelect={handleSelect}
                    videoLiked={videoLiked}
                    handleVideoLiked={handleVideoLiked}
                />
            </Favorites>
        </Container>
    );
};

export default Home;
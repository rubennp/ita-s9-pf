import { Container, RecommendedOrSearched, LastViewed, Favorites } from "./Home.styled";

import VideoList from '../../VideoList';

const Home = ({search, list, handleSelect}) => {
    return (
        <Container>
            <RecommendedOrSearched>
                <h3>{search === '' ? "Recommended" : "Searched"}  videos</h3>
                <VideoList list={list.items} handleVideoSelect={handleSelect}/>
            </RecommendedOrSearched>
            <LastViewed>
                <h3>Last searches</h3>
            </LastViewed>
            <Favorites>
                <h3>Favorites videos</h3>
            </Favorites>
        </Container>
    );
};

export default Home;
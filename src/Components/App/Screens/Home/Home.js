import { Container, RecommendedOrSearched, LastViewed, Favorites } from "./Home.styled";

import VideoList from '../../VideoList';

const Home = ({search, fromSearch, fromRecommended, handleSelect}) => {
    return (
        <Container>
            <RecommendedOrSearched>
                { search === '' ?
                    <>
                        <h3>Recommended videos</h3>
                        <VideoList list={fromRecommended.items} handleVideoSelect={handleSelect}/>
                    </>
                    :
                    <>
                        <h3>Searched videos</h3>
                        <VideoList list={fromSearch.items} handleVideoSelect={handleSelect}/>
                    </>
                }   
            </RecommendedOrSearched>
            <LastViewed>
                <h3>Last viewed</h3>
            </LastViewed>
            <Favorites>
                <h3>Favorites</h3>
            </Favorites>
        </Container>
    );
};

export default Home;
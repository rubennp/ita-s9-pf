import { Container, RecommendedOrSearched, LastViewed, Favorites } from "./Home.styled";

import VideoList from '../../VideoList';

const Home = ({search, fromSearch, fromRecommended, handleSelect}) => {
    return (
        <Container>
            <RecommendedOrSearched>
                { search === '' ?
                    <>
                        <p>Recommended videos</p>
                        <VideoList list={fromRecommended.items} handleVideoSelect={handleSelect}/>
                    </>
                    :
                    <>
                        <p>Searched videos</p>
                        <VideoList list={fromSearch.items} handleVideoSelect={handleSelect}/>
                    </>
                }   
            </RecommendedOrSearched>
            <LastViewed>
                <p>Last viewed</p>
            </LastViewed>
            <Favorites>
                <p>Favorites</p>
            </Favorites>
        </Container>
    );
};

export default Home;
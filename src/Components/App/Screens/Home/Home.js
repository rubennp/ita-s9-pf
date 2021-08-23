import { Container, RecommendedOrSearched, LastViewed, Favorites } from "./Home.styled";

import VideoList from '../../VideoList';
import SearchesList from '../../SearchesList';
import { useEffect } from "react";

const Home = ({
    search, 
    searches, 
    handleDelSearch, 
    handleRepeatSearch,
    handleLoadSearch,
    fromSavedSearch,
    handleExitFromSavedList,
    list, 
    handleSelect, 
    videoLiked, 
    handleVideoLiked
}) => {

    useEffect(() => {
        handleExitFromSavedList();
    }, []);

    return (
        <Container>
            <RecommendedOrSearched>
                { fromSavedSearch ? 
                    <h3>Videos from your saved list "{fromSavedSearch}"</h3>
                : 
                    <h3>{search === '' ? "Recommended videos" : `Videos from your search "${search}"`}</h3>
                }
                <VideoList
                    list={list} 
                    handleVideoSelect={handleSelect} 
                    videoLiked={videoLiked} 
                    handleVideoLiked={handleVideoLiked} 
                />
            </RecommendedOrSearched>
            <LastViewed>
                <h3>Last searches</h3>
                {searches && <SearchesList 
                    list={searches} 
                    handleDelSearch={handleDelSearch}
                    handleRepeatSearch={handleRepeatSearch}
                    handleLoadSearch={handleLoadSearch}
                />}
            </LastViewed>
            <Favorites>
                <h3>Liked videos{videoLiked.length > 0 && ` · ${videoLiked.length}`}</h3>
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
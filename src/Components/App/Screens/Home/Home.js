import { useState, useEffect } from 'react';

// Styled & Bootstrap Components
import { 
    Container, 
    RecommendedOrSearched, 
    SavedList,
    LastSearches, 
    Favorites 
} from "./Home.styled";

// Components
import VideoList from '../shared/VideoList';
import SearchesList from './SearchesList';
import ActionButton from '../shared/ActionButton/ActionButton';


/*
 * Home() : Component = Home's Screen
 */
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
    const [listFromSaved, setListFromSaved] = useState(null);

    useEffect(function onComingFromSaved() {
        setListFromSaved(fromSavedSearch);
    }, [fromSavedSearch]);

    return (
        <Container>
            <RecommendedOrSearched>
                { listFromSaved ? 
                    <SavedList>
                        <h3>Videos from your saved list "{listFromSaved}"</h3>
                        <ActionButton
                            look="small"
                            overlayKey="savedlist-exitbutton"
                            overlayPlacement="left"
                            tooltipId="tooltip-savedlist-exitbutton"
                            tooltipText="Exit from saved list"
                            buttonVariant="secondary"
                            buttonAction={() => handleExitFromSavedList()}
                            buttonIcon="BoxArrowUpRight"
                        />
                    </SavedList> 
                : 
                    <h3>{search === '' ? "Popular videos" : `Videos from your search "${search}"`}</h3>
                }
                <div>
                    <VideoList
                        list={list} 
                        handleVideoSelect={handleSelect} 
                        videoLiked={videoLiked} 
                        handleVideoLiked={handleVideoLiked} 
                    />
                </div>
            </RecommendedOrSearched>
            <LastSearches>
                <h3>Last searches</h3>
                {<SearchesList 
                    list={searches} 
                    handleDelSearch={handleDelSearch}
                    handleRepeatSearch={handleRepeatSearch}
                    handleLoadSearch={handleLoadSearch}
                />}
            </LastSearches>
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
import { useState, useEffect } from 'react';

// Styled & Bootstrap Components
import { 
    Container, 
    RecommendedOrSearched, 
    SavedList,
    ExitButton, 
    LastSearches, 
    Favorites 
} from "./Home.styled";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// Components
import VideoList from '../../VideoList';
import SearchesList from '../../SearchesList';

// Icons
import { BoxArrowUpRight as ExitIcon } from 'react-bootstrap-icons';

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
                        <OverlayTrigger 
                            key="savedlist-exitbutton"
                            placement="left"
                            delay={{ show: 150, hide: 150 }}
                            overlay={
                                <Tooltip id={`tooltip-savedlist-exitbutton`}>
                                    <small>Exit from saved list</small>
                                </Tooltip>
                            }
                        >
                            <ExitButton variant="secondary" size="sm" onClick={() => handleExitFromSavedList()}>
                                <ExitIcon/>
                            </ExitButton>
                        </OverlayTrigger>
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
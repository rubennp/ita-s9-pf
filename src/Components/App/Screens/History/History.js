// Components
import ActionButton from '../shared/ActionButton';

// Styled Components & Bootstrap
import { Container, FromSearches, LastViewed } from './History.styled';

// Components
import VideoList from '../shared/VideoList';

/*
 * History(): Component = History's screen.
 */
const History = ({
    list,
    handleResetViewed,
    handleVideoSelect, 
    videoLiked, 
    handleVideoLiked,
    videosFromYourSearches,
    handleRandomListFromYourSearches,
}) => {
    return (
        <Container>
            <LastViewed list={list}>
                <div>
                    <h3>Last viewed videos</h3>
                    {list && 
                        <ActionButton
                            small 
                            overlayKey="lastViewed-resetButton"
                            overlayPlacement="left"
                            tooltipId="lastViewed-resetButton"
                            tooltipText="Reset last viewed videos list"
                            buttonVariant="danger"
                            buttonAction={() => handleResetViewed()}
                            buttonIcon="Trash"
                        />
                    }
                </div>
                {list ?
                    <div>
                        <VideoList 
                            fromLastViewed 
                            list={list} 
                            handleVideoSelect={handleVideoSelect} 
                            videoLiked={videoLiked} 
                            handleVideoLiked={handleVideoLiked} 
                        />
                    </div>
                    :
                    <div>
                        <h3>Nothing to show you.</h3>
                        <h3><small>You didn't see any videos, yet!</small></h3>
                    </div>
                    
                }
            </LastViewed>
            <FromSearches list={videosFromYourSearches}>
                <div>
                    <h3>Random videos from your searches</h3>
                    {videosFromYourSearches &&
                        <ActionButton
                            small 
                            overlayKey="videosFromYourSearches-randomButton"
                            overlayPlacement="left"
                            tooltipId="videosFromYourSearches-randomButton"
                            tooltipText="Random new list"
                            buttonVariant="danger"
                            buttonAction={() => handleRandomListFromYourSearches()}
                            buttonIcon="Shuffle"
                    />
                    }
                </div>
                {videosFromYourSearches ?
                    <div>
                        <VideoList
                            fromSearches
                            list={videosFromYourSearches} 
                            handleVideoSelect={handleVideoSelect} 
                            videoLiked={videoLiked} 
                            handleVideoLiked={handleVideoLiked} 
                        />
                    </div>
                :
                    <div>
                        <h3>Nothing to show you.</h3>
                        <h3><small>You didn't have any search, yet!</small></h3>
                    </div>
                }
            </FromSearches>
        </Container>
    );
};

export default History;
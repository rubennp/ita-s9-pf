// Styled Components & Bootstrap
import { Container, FromSearches, LastViewed } from './History.styled';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// Icons
import { 
    Trash as IconReset,
    Shuffle as IconRandom,
} from 'react-bootstrap-icons';

// Components
import VideoList from '../../VideoList';

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
                        <OverlayTrigger 
                            key="lastViewed-resetButton"
                            placement="left"
                            delay={{ show: 150, hide: 150 }}
                            overlay={
                                <Tooltip id={`lastViewed-resetButton`}>
                                    <small>Reset last viewed videos list</small>
                                </Tooltip>
                            }
                        >
                            <Button variant="danger" size="sm" onClick={() => {
                                handleResetViewed(); 
                            }}><IconReset size={12}/></Button>
                        </OverlayTrigger>
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
                        <OverlayTrigger 
                            key="videosFromYourSearches-randomButton"
                            placement="left"
                            delay={{ show: 150, hide: 150 }}
                            overlay={
                                <Tooltip id={`videosFromYourSearches-randomButton`}>
                                    <small>Random new list</small>
                                </Tooltip>
                            }
                        >
                            <Button variant="danger" size="sm" onClick={() => {
                                handleRandomListFromYourSearches(); 
                            }}><IconRandom size={12}/></Button>
                        </OverlayTrigger>
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
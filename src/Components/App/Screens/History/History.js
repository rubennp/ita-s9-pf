// Styled Components & Bootstrap
import { Container, FromSearches, LastViewed } from './History.styled';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// Icons
import { Trash as IconReset } from 'react-bootstrap-icons';

// Components
import VideoList from '../../VideoList';

/*
 * History(): Component. Screen History.
 */
const History = ({
    list,
    handleResetViewed,
    handleVideoSelect, 
    videoLiked, 
    handleVideoLiked
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
                { list ?
                    <>
                        <div>
                            <VideoList fromLastViewed list={list} handleVideoSelect={handleVideoSelect} videoLiked={videoLiked} handleVideoLiked={handleVideoLiked} />
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <h3>Nothing to show you.</h3>
                            <h3><small>You didn't see any videos, yet!</small></h3>
                        </div>
                    </>
                }
            </LastViewed>
            <FromSearches>
                <h3>From searches</h3>
            </FromSearches>
        </Container>
    );
};

export default History;
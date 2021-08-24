import Moment from 'react-moment';

// Components
import VideoList from '../../VideoList';

// Styled & Bootstrap Components
import { ScreenContainer, ListContainer } from './Searches.styled';
import { Button } from 'react-bootstrap';

// Icons
import { Trash as IconDel } from 'react-bootstrap-icons';

const Searches = ({
    searches,
    handleDelSearch,
    handleVideoSelect,
    videoLiked,
    handleVideoLiked,
}) => {
    return (
        <ScreenContainer searches={searches}>
            {searches ? searches.map((search, idx) => {
                return (
                    <ListContainer key={idx}>
                        <div>
                            <p>"{search.search}" <small>(<Moment format="DD/MM/YYYY - HH:mm">{search.date}</Moment>)</small></p>
                            <Button variant="danger" size="sm"><IconDel size={12} onClick={() => {
                                handleDelSearch(idx);
                            }}/></Button>
                        </div>
                        <VideoList list={search.videos} handleVideoSelect={handleVideoSelect} videoLiked={videoLiked} handleVideoLiked={handleVideoLiked}/>
                    </ListContainer>
                );
            })
            : 
            <>
                <h3>Nothing to show you.</h3>
                <h3><small>You don't make any search, yet!</small></h3> 
            </>
            }
        </ScreenContainer>
    );
};

export default Searches;
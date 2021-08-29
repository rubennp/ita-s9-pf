import Moment from 'react-moment';

// Components
import VideoList from '../../VideoList';

// Styled & Bootstrap Components
import { ScreenContainer, ListContainer } from './Searches.styled';
import { Button } from 'react-bootstrap';

// Icons
import { 
    Trash as IconDel,
    Calendar as IconDay,
    Clock as IconTime,
    HourglassSplit as IconFromNow,
    Search as IconSearch,
} from 'react-bootstrap-icons';

/*
 * Searches() : Component = Searches's Screen
 */
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
                            <p>
                                <IconDay />
                                <Moment format="DD/MM/YYYY">{search.date}</Moment>
                                <IconTime />
                                <Moment format="HH:mm">{search.date}</Moment>
                                <IconFromNow />
                                <Moment fromNow>{search.date}</Moment>
                            </p>
                            <p><IconSearch />{search.search}</p>
                            <Button variant="danger" size="sm" onClick={() => {
                                handleDelSearch(idx);
                            }}><IconDel size={12}/></Button>
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
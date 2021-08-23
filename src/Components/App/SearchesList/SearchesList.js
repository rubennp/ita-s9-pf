import Moment from 'react-moment';

import { List, Item, Info, Actions } from "./SearchesList.styled";

import { Image , Button } from 'react-bootstrap';
import { ArrowRepeat, Upload, Trash} from 'react-bootstrap-icons';

const SearchesList = ({list}) => {
    return (
        <List>
            {list.map((li, idx) => {
                return li.date && (
                    <Item key={idx}>
                        <Info>
                            <Image height="50" width="50" roundedCircle src={li.imgUrl}/>
                            <p>{li.search} · <Moment fromNow>{li.date}</Moment></p>;
                        </Info>
                        <Actions>
                            <Button type="button" size="sm" variant="secondary"><ArrowRepeat /></Button>
                            <Button type="button" size="sm" variant="secondary"><Upload /></Button>
                            <Button type="button" size="sm" variant="danger"><Trash /></Button>
                        </Actions>
                    </Item>
                );
            })}
        </List>
    );
};

export default SearchesList;
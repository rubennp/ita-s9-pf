import { useState, useEffect } from 'react';
import Moment from 'react-moment';

// Components
import ActionButton from '../../shared/ActionButton';

// Styled & Bootstrap Components
import { List, Item, Info, Actions } from "./SearchesList.styled";
import { Image } from 'react-bootstrap';

import { buttonsInfo } from './buttonsInfo';

/*
 * SearchesList: Component = manages latests searches list
 */
const SearchesList = ({
    list, 
    handleDelSearch, 
    handleRepeatSearch,
    handleLoadSearch
}) => {
    const [action, setAction] = useState({action: '', idx: null});

    useEffect(function onAction() {
        switch(action.action) {
            case 'REPEAT':
                handleRepeatSearch(action.idx);
                break;
            case 'LOAD':
                handleLoadSearch(action.idx);
                break;
            case 'DELETE':
                handleDelSearch(action.idx);
                break;
            default:
                break;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [action]);

    return (
        <List list={list}>
            {list ? list.map((li, idx) => {
                return li.date && (
                    <Item key={`searchlist-item-${idx}`}>
                        <Info>
                            <Image height="50" width="50" roundedCircle src={li.imgUrl}/>
                            <div>
                                <p>{li.search}</p>
                                <p><Moment fromNow>{li.date}</Moment></p>
                            </div>
                        </Info>
                        <Actions>
                            {buttonsInfo.map(button => {
                                return (
                                    <ActionButton key={button.id}
                                        look="normal"
                                        overlayKey={`searchlist-item-${button.id}`}
                                        overlayPlacement="top"
                                        tooltipId={`tooltip-${button.id}`}
                                        tooltipText={button.tooltip}
                                        buttonVariant={button.colorVariant}
                                        buttonAction={() => setAction({action: button.action, idx: idx})}
                                        buttonIcon={button.icon}
                                    />
                                );
                            })}
                        </Actions>
                    </Item>
                );
            })
            :
            <li><small>You don't make any search, yet!</small></li> 
            }
        </List>
    );
};

export default SearchesList;
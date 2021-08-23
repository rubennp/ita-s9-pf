import { useState, useEffect } from 'react';

import Moment from 'react-moment';

import { List, Item, Info, Actions } from "./SearchesList.styled";

import { Image , Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ArrowRepeat, Upload, Trash} from 'react-bootstrap-icons';

const buttons = [
    { id: "btnActionRepeat", colorVariant: "secondary", icon: <ArrowRepeat/>, tooltip: "Repeat this search", action: 'REPEAT', },
    { id: "btnActionLoad", colorVariant: "secondary", icon: <Upload/>, tooltip: "Load saved results from this search", action: 'LOAD',},
    { id: "btnActionDel", colorVariant: "danger", icon: <Trash/>, tooltip: "Delete this search", action: 'DELETE', },
];

/*
 * SearchesList: component. Controls latests searches list
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
        <List>
            {list.map((li, idx) => {
                return li.date && (
                    <Item key={idx}>
                        <Info>
                            <Image height="50" width="50" roundedCircle src={li.imgUrl}/>
                            <p>{li.search} · <Moment fromNow>{li.date}</Moment></p>;
                        </Info>
                        <Actions>
                            {buttons.map(button => {
                                return (
                                    <OverlayTrigger
                                        key={action.id}
                                        placement="top"
                                        delay={{ show: 150, hide: 150 }}
                                        overlay={
                                            <Tooltip id={`tooltip-${button.id}`}>
                                                <small>{button.tooltip}</small>
                                            </Tooltip>
                                        }
                                    >
                                        <Button 
                                            type="button" 
                                            size="sm" 
                                            variant={button.colorVariant}
                                            onClick={() => setAction({action: button.action, idx: idx})}
                                        >{button.icon}</Button>
                                    </OverlayTrigger>
                                );
                            })}
                        </Actions>
                    </Item>
                );
            })}
        </List>
    );
};

export default SearchesList;
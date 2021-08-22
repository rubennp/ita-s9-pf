import styled from 'styled-components';
import { ListGroup } from "react-bootstrap";

export const List = styled(ListGroup)`
    display: flex;
    flex-wrap: ${props => props.favorites || props.page ? 'wrap' : 'nowrap'}; 
    ${props => props.favorites || props.page ? 
        `overflow-y: auto; 
         height: ${props.favorites ? '48vh' : '81vh'}; 
         align-content: flex-start;`
         : 
         `overflow: auto;`
    }
    list-style-type: none;
    margin: 0;
    padding: 0;
    ${props => (props.favorites && props.videoLiked.length === 0) && 
        `color: rgba(255, 255, 255, .5);
         justify-content: center;
         align-content: center;`
    }
`;
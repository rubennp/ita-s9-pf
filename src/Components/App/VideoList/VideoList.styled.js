import styled from 'styled-components';
import { ListGroup } from "react-bootstrap";

export const List = styled(ListGroup)`
    display: flex;
    flex-wrap: ${props => props.favorites ? 'wrap' : 'nowrap'}; 
    ${props => props.favorites ? 
        `overflow-y: auto; 
         height: 48vh; 
         align-content: flex-start;`
         : 
         `overflow: auto;`
    }
    list-style-type: none;
    margin: 0;
    padding: 0;
`;
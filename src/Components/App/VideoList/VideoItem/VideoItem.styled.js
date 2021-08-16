import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const Item = styled(ListGroup.Item)`
    padding: .25em 0;

    &:first-of-type { padding-top: 0;}

    &:last-of-type { padding-bottom: 0; }

    &:hover { 
        cursor: pointer; 
        
        * { 
            transition: transform .5s;
            transform: scale(0.99, 0.99);
        }
    }

    .video-selected {
        padding: .25rem;
        background: rgb(80,80,80);
        background: linear-gradient(90deg, rgba(80,80,80,0) 0%, rgba(220,220,220,1) 20%);
        color: white;
    }

    h3 {
        font-size: .8rem;
        font-weight: bold;
    }
`;
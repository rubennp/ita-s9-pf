import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const Item = styled(ListGroup.Item)`
    padding: .25em 0;

    &:first-of-type { padding-top: 0;}

    &:last-of-type { padding-bottom: 0; }

    & > div:not(div[class*='video-selected']):hover { 
        cursor: pointer;

        img {
            transition: transform .5s;
            transform: scale(0.975, 0.975);
        }

        h3 {
            transition: all .5s;
            color: rgba(0, 0, 0, 1);
        }
    }

    & > div.video-selected {
        padding: .25rem;
        background: rgb(80,80,80);
        background: linear-gradient(90deg, rgba(80,80,80,0) 0%, rgba(220,220,220,1) 20%);
        color: white;
    }

    h3 {
        color: rgba(0, 0, 0, .8);
        margin: 0;
        font-size: .85rem;
        font-weight: bold;
    }
`;
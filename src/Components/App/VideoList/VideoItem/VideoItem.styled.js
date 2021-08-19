import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const Item = styled(ListGroup.Item)`
    width: 19%;
    margin-left: .75em;

    &:hover { 
        cursor: pointer;

        img {
            transition: opacity .5s;
            opacity: .5;
        }

        .card-title {
            transition: color .5s;
            color: rgba(0, 0, 0, 1);
        }
    }

    .card-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: rgba(0, 0, 0, .5);
        margin: 0;
        font-size: .85rem;
        font-weight: bold;
    }
`;
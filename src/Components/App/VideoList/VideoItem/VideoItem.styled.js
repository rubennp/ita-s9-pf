import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const Info = styled.div`
    margin-top: .5em;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: .9em;
    font-weight: bold;
    color: #CED4DA;
`;

export const Item = styled(ListGroup.Item)`
    &:not(:first-of-type) {
        margin-left: 1.5em;
    }

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

    .card {
        height: 25vh;
        width: 20vw;
        border-radius: 1em;
        border: none;
        
    }

    .card-img-top {
        height: 60%;
        border-radius: 1em 1em 0 0;
        object-fit: cover;
        object-position: 100%;
    }

    .card-title {
        height: 40%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: black;
        margin: 0;
        font-size: .85rem;
        font-weight: bold;
    }
`;
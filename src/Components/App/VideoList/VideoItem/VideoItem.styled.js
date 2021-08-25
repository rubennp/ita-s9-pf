import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 75%;
    height: 100%;
    width: 26%;
    background-color: rgba(0, 0, 0, .75);
    border-radius: 0 1em 1em 0;
`;

export const Info = styled.div`
    margin-top: .75em;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: .8em;
    font-weight: bold;
    color: #CED4DA;
`;

export const Item = styled(ListGroup.Item)`
    ${props => {
        if (props.favorites) {
            return (
                `&:nth-child(even) { 
                    margin-left: .5em;
                }
                margin-bottom: .5em;
                `
            );
        } else if (props.page) {
            return (
                `&:not(:nth-child(3n+1)) {
                    margin-left: 2em;
                }
                margin-bottom: 1em;`
            );
        } else {
            return (
                `&:not(:first-of-type) {
                    margin-left: 1.5em;
                }`
            );
        }     
    }}

    .time {
        display: flex;
        align-items: center;

        svg { margin-right: .25em;}
    }

    img:hover { 
        cursor: pointer;
        transition: opacity .5s;
        opacity: .5;
    }

    .card {
        height: ${props => props.favorites ? '15vh' : '25vh'};
        width: ${props => props.favorites ? ' 18vw' : '20vw'};
        border-radius: 1em;
        border: none;
        
    }

    .card-img-top {
        height: ${props => props.favorites ? '100%' : '60%'};
        border-radius: ${props => props.favorites ? '1em' : '1em 1em 0 0'};
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
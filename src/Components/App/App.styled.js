import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const Search = styled.header`
    display: flex;
    align-items: center;
    grid-area: search;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
`;

export const List = styled.aside`
    grid-area: video-list;
`;

export const Detail = styled.article`
    grid-area: video-detail;
`;

export const Main = styled(Container)`
    display: grid;
    grid-template-columns: 2.75fr 1.25fr;
    grid-template-rows: .5fr 3.5fr;
    grid-template-areas:
    'search search'
    'video-detail video-list';
    column-gap: 1rem;
    row-gap: 1rem;
    height: auto;
    padding: 2rem;

    & .video-list-title { display: none; }

    @media (max-width: 768px) {
        height: auto;
        grid-template-columns: 1fr;
        grid-template-rows: .5fr auto auto;
        grid-template-areas:
        'search'
        'video-detail'
        'video-list';
        row-gap: 1.5rem;

        & .video-list-title { 
            display: block; 
            font-size: .9rem;
            font-weight: bold;
            text-align: center;
            color: rgba(0, 0, 0, .75);
            border-bottom: 1px double rgba(0, 0, 0, .2);
            margin: .5rem 0 1rem;
            padding-bottom: .5rem;
        }
    }
`;

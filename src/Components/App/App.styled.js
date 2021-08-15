import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const Search = styled.header`
    display: flex;
    align-items: center;
    background-color: orange;
    grid-area: search;
`;

export const List = styled.aside`
    overflow: auto;
    background-color: green;
    grid-area: video-list;
`;

export const Detail = styled.article`
    background-color: blue;
    grid-area: video-detail;
`;

export const Main = styled(Container)`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: .5fr 3.5fr;
    grid-template-areas:
    'search search'
    'video-detail video-list';
    column-gap: 1rem;
    row-gap: 1rem;
    height: 100vh;
    padding: 2rem;
    background-color: rgba(0, 0, 0, .2); // provisional
`;

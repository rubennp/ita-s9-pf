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
    overflow: auto;
    background-color: green;
    grid-area: video-list;
`;

export const Detail = styled.article`
    grid-area: video-detail;
`;

export const Main = styled(Container)`
    display: grid;
    grid-template-columns: 2.5fr 1.5fr;
    grid-template-rows: .5fr 3.5fr;
    grid-template-areas:
    'search search'
    'video-detail video-list';
    column-gap: 1rem;
    row-gap: 1rem;
    height: 100vh;
    padding: 2rem;
`;

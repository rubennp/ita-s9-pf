import styled from 'styled-components';

export const Screen = styled.section`
    display: flex;
    grid-area: sections;
    padding: 0 2em;
    color: white;
    justify-content: center;
    align-items: center;

    * {
        font-size: 4em;
    }
`;

export const List = styled.aside`
    grid-area: video-list;
`;

export const Detail = styled.article`
    grid-area: video-detail;
`;

export const Main = styled.main`
    display: grid; 
    grid-template-columns: 0.75fr 1fr 1fr 1fr; 
    grid-template-rows: 0.5fr 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "menu search search search"
    "menu sections sections sections"
    "menu sections sections sections"
    "menu sections sections sections"; 
    width: 100%; 
    height: 100vh;
    background-color: #161523;
`;

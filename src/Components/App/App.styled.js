import styled from 'styled-components';

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

export const Screen = styled.article`
    grid-area: sections;
    padding: 0 2em;

    h3 {
        color: rgba(255, 255, 255, .5);
        font-size: 1em;
        font-weight: bold;
    }
`;

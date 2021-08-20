import styled from 'styled-components';

export const Detail = styled.section`
    grid-area: video-detail;
    display: grid;
    grid-template-columns: 1.80fr 1.20fr;
    grid-template-rows: 1fr;
    grid-template-areas: "iframe video-info";
    gap: 0 2em;

    border-radius: 10px;
    background-color: white;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .5);
    padding: 2em;
`;

export const Video = styled.iframe`
    width: 100%;
    height: 100%;
`;

export const Info = styled.div`
    grid-area: video-info;
    color: black;

    h2 { 
        font-size: 1.5em; 
        font-weight: bold;
    }

    p { 
        font-size: 1em;
        font-weight: 500;
        color: #495057;
        margin-bottom: 0; 
    }

`;
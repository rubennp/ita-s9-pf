import styled from 'styled-components';

export const Container = styled.section`
    grid-area: video;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 1.85fr 1.15fr; 
    grid-template-areas: 
    "video-detail"
    "related";
    gap: 2em 0;
`;

export const Detail = styled.section`
    grid-area: video-detail;
`;

export const Related = styled.section`
    grid-area: related;
    overflow: auto;
    
    h2 { 
        font-size: 1.2em;
        font-weight: bold;
        color: #F1F3F5;
        margin: .5em;
    }
`;
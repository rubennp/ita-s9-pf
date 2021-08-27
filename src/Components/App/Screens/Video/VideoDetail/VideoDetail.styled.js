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
    padding: 1.5em;
`;

export const Video = styled.iframe`
    width: 40vw;
    height: 38vh;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: video-info;
    color: black;
    text-align: justify;

    h2 { 
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 1.5em; 
        font-weight: bold;
        margin-bottom: .5em;
    }

    p { 
        overflow-y: auto;
        font-size: 1em;
        font-weight: 500;
        color: #495057;
        margin-bottom: 0;
        height: 28vh;
        width: 28vw;
        margin-bottom: 1em;
    }

    button {
        margin-top: auto;
        align-self: flex-end;

        svg { 
            width: 32px !important; 
            height: 32px !important;
        }
    }
`;
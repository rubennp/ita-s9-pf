import styled from 'styled-components';

export const Container = styled.section`
    grid-area: home;
    width: 100%;
    height: 100%;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: .75fr 1.25fr;
    gap: 0.5em 0.5em; 
    grid-template-areas: 
    "recommendedOrSearched recommendedOrSearched recommendedOrSearched recommendedOrSearched"
    "lastViewed lastViewed favorites favorites"
`;

export const RecommendedOrSearched = styled.section`
    grid-area: recommendedOrSearched;
`;

export const LastViewed = styled.section`
    grid-area: lastViewed;
`;

export const Favorites = styled.section`
    grid-area: favorites;
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        background-color: rgba(255, 255, 255, .5);
        color: white;
        border-radius: .75em;
        padding: .5em;
        list-style-type: none;
        margin-bottom: .5em;
    }
`;

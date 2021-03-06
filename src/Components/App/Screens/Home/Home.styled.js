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
    & > div {
        display: flex;
        height: 28vh;
        align-items: center;
    }
`;

export const SavedList = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LastSearches = styled.section`
    grid-area: lastViewed;
`;

export const Favorites = styled.section`
    grid-area: favorites;

    small { 
        font-weight: normal;
        font-size: .75em;
    }
`;
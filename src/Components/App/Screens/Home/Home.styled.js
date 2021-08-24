import styled from 'styled-components';
import { Button } from 'react-bootstrap';

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

export const SavedList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5em;
`;

export const ExitButton = styled(Button)`
    margin-left: .5em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 2em;
    width: 2em;

    svg { 
        padding: .1em;
        margin-left: .2em;
        overflow: visible;
    }
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
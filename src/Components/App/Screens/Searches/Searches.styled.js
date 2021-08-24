import styled from 'styled-components';

export const ScreenContainer = styled.div`
    height: 82vh;
    overflow-y: auto;

    ${props => {
        if (!props.searches) {
            return (
                `display: flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: center;
                 width: 100%;
                 height: 100%;
                 h3 { margin-bottom: 1em;}`
            );
        }
    }}
`;

export const ListContainer = styled.div`
    &:not(:last-of-type) { margin-bottom: 1em; }

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: .5em;
        background-color: rgba(255, 255, 255, .05);    
        filter: drop-shadow(0 0 1px rgba(255, 255, 255, .5));
        border-radius: .25em 1em 1em .25em;

        margin-bottom: .5em;
    }

    p {
        display: inline;
        margin: .5em;
        color: rgba(255, 255, 255, .5);
        font-weight: bold;
    }

    button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        height: 2em;
        width: 2em;

        svg { overflow: visible; }
    }
`;
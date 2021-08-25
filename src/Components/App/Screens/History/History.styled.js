import styled from 'styled-components';

export const Container = styled.section`
    grid-area: sections;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "lastViewed"
    "fromSearches";

    ul {
        align-self: center;
    }
`;

export const LastViewed = styled.section`
    & > div:not(:first-of-type) {
        height: 39vh;
        display: flex;
        justify-content: flex-start;
    }

    ${(props) => {
        if (!props.list) {
            return (
                `& > div:not(:first-of-type) {
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    h3 {
                        color: rgba(255, 255, 255, .25);
                        margin-bottom: 1em; 
                    }
                 }`
            );
        } else {
            return (
                `grid-area: lastViewed;
                 overflow-y: auto;`
            );
        }
    }}

    & > div {
        display: flex;
        justify-content: space-between;

        button {
            justify-self: flex-end;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            height: 1.5em;
            width: 1.5em;
    
            svg {
                margin-left: .1em;
                overflow: visible; 
            }
        }
    }
`;

export const FromSearches = styled.section`
    grid-area: fromSearches;
    margin-bottom: 2em;
`;
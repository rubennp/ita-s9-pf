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
`;

export const LastViewed = styled.section`
    & > div:not(:first-of-type) {
        height: 38vh;
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
        align-items: center;

        h3 { margin-bottom: 0; }
    }
    
    ul {
        align-self: center;
        height: 26vh;
    }
`;

export const FromSearches = styled(LastViewed)`
    grid-area: fromSearches !important;
`;
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
                 
                 h3 { 
                     color: rgba(255, 255, 255, .25);
                     margin-bottom: 1em;
                 }`
            );
        }
    }}
`;

export const ListContainer = styled.div`
    line-height: unset;
    background-color: rgba(255, 255, 255, .1);
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    padding-bottom: 1em;
    margin-bottom: 1em;

    & > ul { 
        margin: 0 1em;
        padding-top: .5em;
    }

    & > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
        align-items: center;
        padding: 0 .5em;
        background-color: rgba(255, 255, 255, .05);    
        filter: drop-shadow(0 0 1px rgba(255, 255, 255, .5));
        border-top-right-radius: 1em;

        margin-bottom: .5em;
        
        p {
            display: inline;
            margin: .5em;
            color: rgba(255, 255, 255, .5);
            font-weight: bold;
        }

        p:first-of-type {
            font-size: .75em;

            time {
                margin-left: .5em;
                
                &:last-of-type {
                    font-weight: normal;
                    font-style: oblique; 
                }
            }

            svg:not(:first-of-type) {
                margin-left: .5em;
            }
        }

        p:not(:first-of-type) {
            color: rgba(255, 255, 255, .75);
            padding: .1em;
            justify-self: center;
            svg { margin-right: .5em; }
        }
    }
`;
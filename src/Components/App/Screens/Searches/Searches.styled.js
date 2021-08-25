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

    &:not(:last-of-type) { 
        margin-bottom: 1em; 
    }

    & > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
        align-items: center;
        padding-right: .5em;
        background-color: rgba(255, 255, 255, .05);    
        filter: drop-shadow(0 0 1px rgba(255, 255, 255, .5));
        border-radius: .25em 1em 1em .25em;

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
                margin-left: .25em;
                
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
            svg { margin-right: .25em; }
        }

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
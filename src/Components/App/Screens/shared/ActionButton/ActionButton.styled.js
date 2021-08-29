import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledButton = styled(Button)`
    border-radius: 100%;

    ${(props) => {
        if (props.small) {
            return (
                `justify-self: flex-end;
                 display: inline-flex;
                 justify-content: center;
                 align-items: center;
                 border-radius: 100%;
                 height: 2em;
                 width: 2em;
                 margin: .3em;
                 border: none;
                 background-color: rgba(0, 0, 0, 0) !important;
                 svg {
                    margin-left: .1em;
                    overflow: visible; 
                 }`
            );
        }
    }}
`;
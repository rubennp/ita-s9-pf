import styled from 'styled-components';
import { Nav as Navigation } from 'react-bootstrap';

export const MenuContainer = styled.aside`
    grid-area: menu;
    padding: 2em;
    color: white;
    background-color: #18141A;
    filter: drop-shadow(-1px -1px 5px rgba(255, 255, 255, .1));

    h2 {
        color: rgba(219, 228, 255, .25);
        text-transform: uppercase;
        font-weight: bold;
        font-size: .9em;
    }
`;

export const Nav = styled(Navigation)`
    padding: 1em;
    list-style-type: none;

    svg { margin-right: 1em;}

    & li { 
        color: white !important; 

        &:hover {
            cursor: pointer;
        }
    }

    a, a:hover {
        color: unset;
        text-decoration: unset;

        &.active, &:hover {
            text-shadow: 0 0 15px #E7F5FF;
            color: #E7F5FF;
            font-weight: bold;
        }

        transition: all .25s;
    }
`;
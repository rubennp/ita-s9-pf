import styled from 'styled-components';
import { Nav as Navigation, Image } from 'react-bootstrap';

export const Img = styled(Image)``;

export const MenuLogo = styled.div`
    grid-area: menu-logo;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
        margin-left: .25em;
        font-size: 1.5em;
        display: inline-block;
        
        span { 
            color: red; 
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, .5));
        }
    }
`;

export const MenuNav = styled.div`
    grid-area menu-nav;
    padding: 2em;

    h2 {
        color: rgba(219, 228, 255, .25);
        text-transform: uppercase;
        font-weight: bold;
        font-size: .9em;
    }
`;

export const MenuContainer = styled.aside`
    display: grid;
    grid-template-columns; 1fr;
    grid-template-rows: 14.25% 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "menu-logo"
        "menu-nav";
    grid-area: menu;
    color: white;
    background-color: #18141A;
    filter: drop-shadow(-1px -1px 5px rgba(255, 255, 255, .1));
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
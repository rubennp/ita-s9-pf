import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const SearchContainer = styled(Container)`
    grid-area: search;
    padding: 1em;
    padding-right: 2em;

    * {
        color: rgba(255, 255, 255, .8);
        background: unset;
        border: unset;
        border-radius: unset;
    }

    .form-control { border-bottom: 1px solid rgba(255, 255, 255, .1); }

    .form-control:focus {
        box-shadow: none !important;
        background: unset;
        color: white;
        font-weight: bold;
        border-bottom: 1px solid rgba(255, 255, 255, .5);
    }

    // Form.Text
    .infoSearch {
        opacity: 0;
        padding-right: 1em;
        font-size: .5em;
        text-align: right;
        display: block;
        margin: 1em 0 0;

        kbd { 
            padding: .4em .3em;
            border-radius: .3em;
            margin: 0 .25em;
            background-color: rgba(255, 255, 255, .5);
            filter: drop-shadow(0 0 2px rgba(255, 255, 255, 1));
            color: black;
            font-weight: bold;
        }

        transition: all 1s;
    }
`;
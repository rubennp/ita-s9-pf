import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const SearchCont = styled(Container)`
    padding: 1rem;

    // Form.Control
    .form-control:focus {
        box-shadow: none !important;
        border-color: unset !important;
    }

    // Form.Label 
    label {                  
        font-weight: bold;
        font-size: .9em;
        margin-bottom: .5em;
    }

    // Form.Text
    small {
        font-size: .6em;
        text-align: right;
        display: block;
        margin: 1em 0 0;

        kbd { background-color: rgba(0, 0, 0, .6)}
    }
`;
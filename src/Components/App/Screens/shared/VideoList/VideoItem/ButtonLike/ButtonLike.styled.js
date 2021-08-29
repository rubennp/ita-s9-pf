import styled from 'styled-components';

export const Button = styled.button`
    border: unset;
    background-color: unset;

    ${props => { if (props.favorites) return 'filter: drop-shadow(0 0 15px rgba(255, 255, 255, 1));'; }}
`;
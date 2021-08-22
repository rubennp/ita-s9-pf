import styled from 'styled-components';

export const Container = styled.section`
    grid-area: sections;
    width: 100%;
    height: 100%;

    h3 { margin-bottom: 1em; }

    ${props => (props.list.length === 0) &&
        `display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;`
    }
`;
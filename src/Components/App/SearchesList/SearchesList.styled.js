import styled from 'styled-components';

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 1em 0 0;
    font-size: .9em;
    background-color: #252130;
    border-radius: 1em;
    height: 48vh;
    overflow-y: auto;

    ${props => !props.list && 
        `display: flex;
         justify-content: center;
         align-items: center;
         color: rgba(255, 255, 255, .5);`
    }
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    margin: 0;
    font-size: .9em;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    
    p {
        display: inline;
        color: white;
        font-weight: bold;
        margin: 0;
    }

    time { 
        color: rgba(255, 255, 255, .75);
        font-weight: normal;
    }

    img {
        object-fit: none;
    }
`;

export const Info = styled.div`
    & *:not(:last-child) { margin-right: 1em; }
`;

export const Actions = styled.div`
    & *:not(:last-child) { margin-right: .5em; }     

    button {
        border-radius: 100%;
    }
`;

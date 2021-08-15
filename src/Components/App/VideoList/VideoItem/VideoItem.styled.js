import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';

export const Item = styled(ListGroup.Item)`
    margin: .5rem;
    padding: 0;

    &:hover { cursor: pointer; }
`;
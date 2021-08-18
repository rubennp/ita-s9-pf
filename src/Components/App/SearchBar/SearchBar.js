import { useState } from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';
import { Search as SearchIcon } from 'react-bootstrap-icons';

// Styled Components
import { SearchContainer } from './SearchBar.styled';

/*
 * SearchBar(): Component
 * 
 * vistos los problemas con las cuotas de la API de youtube, capturo Enter para realizar fetch y que 
 * no realize tantas consultas a la API.
 */
const SearchBar = ({ search, handleSubmit}) => {
    const [value, setValue] = useState(search);

    return (
        <SearchContainer fluid>
            <Form>
                <Row>
                    <Col>
                        <InputGroup>
                            <InputGroup.Text><SearchIcon size={16}/></InputGroup.Text>
                            <Form.Control
                                type="search" 
                                placeholder="Your search here"
                                value={value}
                                onChange={e => { setValue(e.target.value)}}
                                onKeyDown={e => { 
                                    if (e.code === 'Enter') {
                                        handleSubmit(value);
                                        e.preventDefault();
                                    } else if (e.code === 'Escape') {
                                        setValue('');
                                        handleSubmit('');
                                        e.preventDefault();
                                    }
                                }}
                                onFocus={() => {document.querySelector('.infoSearch').style.opacity = 1;}}
                                onBlur={() => {document.querySelector('.infoSearch').style.opacity = 0;}}
                            />
                        </InputGroup>
                        <Form.Text className="muted infoSearch">
                            Press <kbd>Enter</kbd> to submit and <kbd>Esc</kbd> to reset
                        </Form.Text>
                    </Col>
                </Row>
            </Form>
        </SearchContainer>
    );
};

export default SearchBar;
import { useState } from 'react';
import { Form, Row, Col} from 'react-bootstrap';

// Styled Components
import { SearchCont } from './SearchBar.styled';

/*
 * SearchBar(): Component
 * 
 * vistos los problemas con las cuotas de la API de youtube, capturo Enter para realizar fetch y que 
 * no realize tantas consultas a la API.
 */
const SearchBar = ({ search, handleSubmit}) => {
    const [value, setValue] = useState(search);

    return (
        <SearchCont fluid>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Video Search</Form.Label>
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
                            />
                            <Form.Text className="muted">
                                Press <kbd>Enter</kbd> to submit and <kbd>Esc</kbd> to reset
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </SearchCont>
    );
};

export default SearchBar;
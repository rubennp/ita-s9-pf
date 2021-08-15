import { useState } from 'react';
import { Form, Row, Col} from 'react-bootstrap';

// Styled Components
import { SearchCont } from './SearchBar.styled';

/*
 * SearchBar(): Component
 * 
 * vistos los problemas con las cuotas de la API de youtube, le pongo un botón para realizar el fetch
 * (aunque me gusta más dinámico en cada caracter, la cantidad de llamadas a la API es brutal y me agota
 * la cuota diaria, lástima.)
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
                                Press <kbd>Enter</kbd> to submit or <kbd>Esc</kbd> to reset
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </SearchCont>
    );
};

export default SearchBar;
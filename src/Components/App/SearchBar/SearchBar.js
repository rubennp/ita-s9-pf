import { useState } from 'react';
import { Form, Button, Row, Col} from 'react-bootstrap';

// Styled Components
import { SearchCont } from './SearchBar.styled';

/*
 * SearchBar(): Component
 * 
 * vistos los problemas con las cuotas de la API de youtube, le pongo un botón para realizar el fetch
 */
const SearchBar = ({ search, handleSubmit}) => {
    const [value, setValue] = useState(search);

    return (
        <SearchCont fluid>
            <Form>
                <Row>
                    <Col xs={7} sm={9} lg={10}>
                        <Form.Control
                            type="search" 
                            placeholder="Your search..."
                            value={value}
                            onChange={e => { setValue(e.target.value) }}
                        />
                    </Col>  
                    <Col className="d-flex gap-2 justify-content-end">
                        <Button type="button" onClick={() => handleSubmit(value)}>Search</Button>
                        <Button type="reset" onClick={() => {
                            setValue('');
                            handleSubmit('');
                        }}>Reset</Button>
                    </Col>
                </Row>
            </Form>
        </SearchCont>
    );
};

export default SearchBar;
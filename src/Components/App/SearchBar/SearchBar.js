import { Container, Form } from 'react-bootstrap';

const SearchBar = ({ search, handleSubmit}) => {
    return (
        <Container className="px-0 mb-5">
            <Form>
                <Form.Group>
                    <Form.Control 
                        type="search" 
                        placeholder="Your search..."
                        value={search}
                        onChange={e => handleSubmit(e.target.value) } />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default SearchBar;
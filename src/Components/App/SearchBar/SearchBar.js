import { useEffect, useState } from 'react';

// Styled & Bootstrap Components
import { SearchContainer } from './SearchBar.styled';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';

// Icons
import { Search as SearchIcon } from 'react-bootstrap-icons';

/*
 * SearchBar(): Component = shows & manages SearchBar
 */
const SearchBar = ({search, handleSubmit, handleExitFromSavedList }) => {
    const [value, setValue] = useState(search);

    useEffect(function onSearchChange() {
        setValue(search);
    }, [search]);

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
                                onChange={e => { 
                                    if (e.target.value !== " ") 
                                        setValue(e.target.value)
                                }}
                                onKeyDown={e => { 
                                    if (e.code === 'Enter') {
                                        handleSubmit(value);
                                        e.preventDefault();
                                    } else if (e.code === 'Escape') {
                                        setValue('');
                                        handleSubmit('');
                                        handleExitFromSavedList();
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
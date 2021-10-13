import React from 'react';
import './searchBar.css';
import { Form, Col, Row, Button } from 'react-bootstrap';


const SearchBar = ({ placeholder, data }) => {
    return (
    <>
        <Form>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Name
                    </Form.Label>
                    <Form.Control type="search" placeholder={placeholder} />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" type="submit">
                    Search
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
    )
}

export default SearchBar;
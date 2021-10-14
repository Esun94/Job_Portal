import React from 'react';
import { Form, Col, Row, Button, Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap';


const SearchBar = ({ placeholder, data }) => {
    return (
        <Container fluid="md">
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
        </Container>    
    )
}

export default SearchBar;
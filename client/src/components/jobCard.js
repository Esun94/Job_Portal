import React from 'react';
import { Form, Col, Row, Button, Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';

const JobCard = ({ placeholder, data }) => {
    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                    <Card style={{ width: 'auto'}}>
                        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                        <Card.Body>
                            <Card.Title>Job Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}




export default JobCard;
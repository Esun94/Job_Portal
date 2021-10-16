import React from 'react';
import { Form, Col, Row, Button, Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import { useQuery, gql } from '@apollo/client';



const JobPackages = () => {

    return (
        <Row xs={1} md={4} className="g-4 justify-content-center">
            {Array.from({ length: 1 }).map((_, idx) => (
            <>
                <Col>
                <Card style={{ width: 'auto'}}>

                    <Card.Body>
                        <Card.Title>Starter</Card.Title>
                        <Card.Text>
                        <h1>$200/ Month</h1>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Active Job Listings: 1</ListGroupItem>
                        <ListGroupItem>Resume Views: 50</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link href="#">Purchase Package</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                
                <Col>
                <Card style={{ width: 'auto'}}>

                    <Card.Body>
                        <Card.Title>Standard</Card.Title>
                        <Card.Text>
                        <h1>$300/ Month</h1>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Active Job Listings: 1</ListGroupItem>
                    <ListGroupItem>Resume Views: 150</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link href="#">Purchase Package</Card.Link>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: 'auto'}}>

                    <Card.Body>
                        <Card.Title>Premium</Card.Title>
                        <Card.Text>
                        <h1>$400/ Month</h1>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Active Job Listings: 5</ListGroupItem>
                    <ListGroupItem>Resume Views: 250</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Card.Link href="#">Purchase Package</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                
                </>
            ))}
        </Row>

    )
}




export default JobPackages;
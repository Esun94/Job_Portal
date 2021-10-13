import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const PostJob = () => {
    return (
        <div className="Container">
            <h1>Post a Job</h1>
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCompanyName">
                    <Form.Label>Date Posted</Form.Label>
                    <Form.Control type="text" placeholder="Enter date" />
                </Form.Group>
        </Row>
            </Form>



        </div>
    )
}
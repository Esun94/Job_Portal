import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const PostJob = () => {
    return (
        <div className="Container">
            <h1>Post a Job</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDatePosted">
                        <Form.Label>Date Posted</Form.Label>
                        <Form.Control type="text" placeholder="Enter date" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridJobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Title" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Location" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridJobType">
                        <Form.Label>Job Type</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Type" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Salary" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Description" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control type="text" placeholder="Enter Skills" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employer" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" on>
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}
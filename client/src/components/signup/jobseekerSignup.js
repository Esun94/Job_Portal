import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const JobseekerSignup = () => {
  return (
    <div>
      <h1>Jobseeker Signup</h1>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        
        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="Enter phone number with area code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAcmanager">
          <Form.Label>Account Manager Name</Form.Label>
          <Form.Control placeholder="Enter Account manager's name" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAcmanagerPhone">
            <Form.Label>Account Manager Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAcEmail">
            <Form.Label>Account Manager Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default JobseekerSignup;

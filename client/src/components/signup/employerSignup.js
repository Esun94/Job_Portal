import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { CREATE_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const EmployerSignup = () => {


  return (
    <div className="Container">
      <h1>Employer Signup</h1>

      <Form>
      <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Company Name" />
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

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Enter Zipcode" />
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

        <Button variant="primary" type="submit" on>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default EmployerSignup;

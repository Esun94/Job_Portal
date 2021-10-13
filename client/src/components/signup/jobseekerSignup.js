import React from 'react';
import { Container, FloatingLabel, Form, Row, Col, Button } from 'react-bootstrap';

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

        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="Enter phone number with area code" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <FloatingLabel controlId="floatingTextarea2" label="Resume">
          <Form.Control
            as="textarea"
            placeholder="Paste Resume here"
            style={{ height: '200px' }}
          />
        </FloatingLabel>
        <Form.Group className="mb-3" controlId="formGridSkillr">
          <Form.Label>Skills</Form.Label>
          <Form.Control placeholder="Enter Skills separated by comma(,)" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocPreference">
            <Form.Label>Location preference</Form.Label>
            <Form.Control type="text" placeholder="Enter location preferences" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridJobPreference">
            <Form.Label>Job Type preference</Form.Label>
            <Form.Control type="text" placeholder="Enter Job type preferences: Fulltime/ Contract" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocPreference">
            <Form.Label>Location preference</Form.Label>
            <Form.Control type="text" placeholder="Enter location preferences" />
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

import React, { useState } from 'react';
import {
  FloatingLabel,
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';

const JobseekerSignup = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    resume: '',
    skill: '',
    locationPreference: '',
    jobtypePreference: '',
    salaryRange: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [addUser, { error }] = useMutation(CREATE_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: Enable form validation by setting attribute to required in form inputs
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      if (!data) {
        throw new Error('something went wrong!');
      }

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }
  };

  return (
    <div>
      <h1>Jobseeker Signup</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              required
            />
          </Form.Group>

        </Row>

        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            placeholder="Enter phone number with area code"
            name="phone"
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Resume">
          <Form.Control
            as="textarea"
            placeholder="Paste Resume here"
            style={{ height: '200px' }}
            name="resume"
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <Form.Group className="mb-3" controlId="formGridSkill">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            placeholder="Enter Skills separated by comma(,)"
            name="skill"
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridlocationPreference">
            <Form.Label>Location preference</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location preferences"
              name="locationPreference"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridjobtypePreference">
            <Form.Label>Job Type preference</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Job type preferences: Fulltime/ Contract"
              name="jobtypePreference"
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridsalaryRange">
            <Form.Label>Expected Salary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expected salary range" name="salaryRange" onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" on>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default JobseekerSignup;

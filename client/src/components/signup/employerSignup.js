import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { CREATE_EMPLOYER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';

const EmployerSignup = (props) => {
  const [userFormData, setUserFormData] = useState({
    companyName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    website: '',
    email: '',
    password: '',
    phone: '',
    accountManagername: '',
    accountManageremail: '',
    accountManagerphone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [addEmployer, { error }] = useMutation(CREATE_EMPLOYER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // TODO: Enable form validation by setting attribute to required in form inputs
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const { data } = await addEmployer({
        variables: { ...userFormData },
      });
  
      if (!data) {
        throw new Error('something went wrong!');
      }
  
      Auth.login(data.addEmployer.token);

    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }
  }

  return (
    <div className="Container">
      <h1>Employer Signup</h1>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Company Name" name="companyName" onChange={handleInputChange} required/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleInputChange} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" onChange={handleInputChange} required/>
          </Form.Group>

        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" name="address" onChange={handleInputChange} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" name="city" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter State" name="state" onChange={handleInputChange} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZipCode">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Enter Zipcode" name="zipCode" onChange={handleInputChange} required/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control placeholder="Enter phone number with area code" name="phone" onChange={handleInputChange} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridWebsite">
          <Form.Label>Website</Form.Label>
          <Form.Control placeholder="Enter Website" name="website" onChange={handleInputChange} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAcmanager">
          <Form.Label>Account Manager Name</Form.Label>
          <Form.Control placeholder="Enter Account manager's name" name="accountManagername" onChange={handleInputChange} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAcmanagerPhone">
            <Form.Label>Account Manager Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone number" name="accountManagerphone" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAcEmail">
            <Form.Label>Account Manager Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="accountManageremail" onChange={handleInputChange} />
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

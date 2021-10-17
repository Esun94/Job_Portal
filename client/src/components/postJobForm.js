import React, { useState } from 'react';
import { Badge, Form, Row, Col, Button, Alert } from 'react-bootstrap';

import { ADD_JOB } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import decode from 'jwt-decode';

const PostJob = () => {
  const empToken = localStorage.getItem('id_token');
  const empDecoded = decode(empToken);
  const employerId = empDecoded.data._id;

  const [status, setStatus] = useState('');

  const [userFormData, setUserFormData] = useState({
    jobTitle: '',
    jobLocation: '',
    jobType: '',
    salary: '',
    jobDescription: '',
    skills: '',
    employer: employerId,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [addJob, { error }] = useMutation(ADD_JOB);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addJob({
        variables: { ...userFormData },
      });

      if (!data) {
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRedirect = () => {
    window.location.assign('/employer/dashboard');
  };

  return (
    <div className="Container mt-4">
      <h1>
        <Badge bg="secondary">Post a Job</Badge>
      </h1>
      {status ? (
        <Alert variant={status} dismissible>
          <Alert.Heading>
            {status[0].toUpperCase() + status.substring(1)}
          </Alert.Heading>
          {status === 'success' ? (
            <p>Job Posted</p>
          ) : (
            <p>Error is Posting Job!</p>
          )}
          <Button
            type="button"
            className="btn btn-primary"
            onClick={handleRedirect}
          >
            Go To Dashboard
          </Button>
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridjobTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Title"
                name="jobTitle"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridjobLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Location"
                name="jobLocation"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridjobType">
              <Form.Label>Job Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Type"
                name="jobType"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridsalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Salary"
                name="salary"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridjobDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job Description"
                name="jobDescription"
                onChange={handleInputChange}
                style={{ height: '150px', width: '525px', display: 'block' }}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridskills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Enter Skills"
                name="skills"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmployer">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                name="employer"
                value={`${employerId}`}
                hidden
                readOnly
                required
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" on="true">
            Post Job
          </Button>
        </Form>
      )}
    </div>
  );
};

export default PostJob;

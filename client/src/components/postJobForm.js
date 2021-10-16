import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

import { ADD_JOB } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import decode from 'jwt-decode';

// import Auth from '../../utils/auth';

const PostJob = () => {
const empToken = localStorage.getItem("id_token");
const empDecoded = decode(empToken);
const employerId = empDecoded.data._id;
console.log(employerId);

    const[userFormData, setUserFormData] = useState({
            jobTitle: '',
            jobLocation: '',
            jobType: '',
            salary: '',
            jobDescription: '',
            skills: '',
            employer: employerId, 
});

console.log(userFormData);

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value});
};

const [addJob, { error }] = useMutation(ADD_JOB);

const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
        const { data } = await addJob({
            variables: { ...userFormData },
        });

        if (!data) {
            throw new Error('something went wrong!');
        } else {
            alert('Job posted!');
        }

    } catch (err) {
        console.error(err);
    }
};

    return (
        <div className="Container">
            <h1>Post a Job</h1>
            <Form onSubmit={handleSubmit}>
                {/* <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDatePosted">
                        <Form.Label>Date Posted</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter date" 
                        name="postDate"
                        onChange={handleInputChange}
                        required/>
                        
                    </Form.Group>
                </Row> */}
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
                        required/>
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
                        required/>
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
                        required/>
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
                        style={{ height: '150px', width: '525px', display: "block" }}
                        required/>
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
                        required/>
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
                        required />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" on="true">
                    Post Job
                </Button>
            </Form>
        </div>
    );
};

export default PostJob;
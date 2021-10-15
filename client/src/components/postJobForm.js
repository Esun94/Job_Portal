import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

import { ADD_JOB } from '../utils/mutations';
import { useMutation } from '@apollo/client';

// import Auth from '../../utils/auth';


const PostJob = () => {
    const[userFormData, setUserFormData] = useState({
        job: {
            jobTitle: '',
            jobLocation: '',
            jobType: '',
            salary: '',
            jobDescription: '',
            skills: '',
        }
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
                        name="job.jobTitle"
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
                        name="job.jobLocation"
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
                        name="job.jobType"
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
                        name="job.salary"
                        onChange={handleInputChange}
                        required/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">  
                    <Form.Group as={Col} controlId="formGridjobDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        type="textarea" 
                        placeholder="Enter Job Description" 
                        name="job.jobDescription"
                        onChange={handleInputChange}
                        required/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">   
                    <Form.Group as={Col} controlId="formGridskills">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Skills" 
                        name="job.skills"
                        onChange={handleInputChange}
                        required/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">  
                    <Form.Group as={Col} controlId="formGridEmployer">
                        <Form.Label>Employer</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employer" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" on>
                    Post Job
                </Button>
            </Form>
        </div>
    );
};

export default PostJob;
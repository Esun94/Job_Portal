import React from 'react';
import { Col, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../utils/queries';

const JobCard = ({ jobTitle }) => {

  const { error, loading, data } = useQuery(GET_JOBS, {
    variables: { jobTitle },
  });
  const jobs = data?.jobs || [];

  const handleApplyJob = (event) => {
    // TODO:
    // 1. get the Job ID
    // 2. call APPLY_JOB based on user logged in
    // 3. If not logged then redirect to Login USer/JobSeeker
    
  }

  return (
    <Row xs={1} md={3} className="g-4">
      {jobs.map((job) => (
        <Col key={job._id}>
          <Card style={{ width: 'auto' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>{job.jobTitle}</Card.Title>
              <Card.Text>{job.jobDescription}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{job.jobLocation}</ListGroupItem>
              <ListGroupItem>{job.salary}</ListGroupItem>
              <ListGroupItem>{job.employer.companyName}</ListGroupItem>
            </ListGroup>
            <Card.Footer>
              <Card.Link>
                <Button type="button" onClick={handleApplyJob}>
                  Apply
                </Button>
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default JobCard;

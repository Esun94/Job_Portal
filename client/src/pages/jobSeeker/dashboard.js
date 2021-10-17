import React from 'react';
import { Col, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import {USER_APPLIED_JOBS} from '../../utils/queries';

const JobseekerDashboard = () => {
  const profile = Auth.getProfile();
  console.log(profile);

  const appliedJobsResult = useQuery(USER_APPLIED_JOBS);
  let appliedJobs = [];

  if ( 
    appliedJobsResult &&
    appliedJobsResult.data &&
    appliedJobsResult.data.userAppliedJobs
  ) {
    appliedJobs = appliedJobsResult.data.userAppliedJobs;
  }

  return (
    <>
      <h1>Welcome, {profile.data.name}</h1>
      <hr />
      <Row  xs={1} md={3} className="g-4">
        {appliedJobs.map((job) => (
          <Col key={job._id}>
            <Card style={{ width: 'auto' }}>
              <Card.Body>
                <Card.Title>{job.jobTitle}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{job.jobLocation}</ListGroupItem>
                <ListGroupItem>{job.jobType}</ListGroupItem>
                <ListGroupItem>{job.employer.companyName}</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default JobseekerDashboard;

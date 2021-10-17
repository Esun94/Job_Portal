import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { USER_APPLIED_JOBS } from '../../utils/queries';

const JobseekerDashboard = () => {
  const profile = Auth.getProfile();
  console.log(profile);

  const appliedJobsResult = useQuery(USER_APPLIED_JOBS);
  console.log(appliedJobsResult);
  let appliedJobs = [];

  if (
    appliedJobsResult &&
    appliedJobsResult.data &&
    appliedJobsResult.data.userAppliedJobs
  ) {
    appliedJobs = appliedJobsResult.data.userAppliedJobs;
  }

  return (
    <div className="mt-4 mb-4">
      <h1 style={{ textAlign: 'center'}}>Welcome, {profile.data.name}</h1>
      <hr />
      {appliedJobs.length ? (
        <Row xs={1} md={3} className="g-4">
          {appliedJobs.map((job) => (
            <Col key={job._id}>
              <Card style={{ width: 'auto' }}>
                <Card.Header className="bg-tertiary">
                  <Card.Title>{job.jobTitle}</Card.Title>
                </Card.Header>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{job.jobLocation}</ListGroupItem>
                  <ListGroupItem>{job.jobType}</ListGroupItem>
                  <ListGroupItem>{job.employer.companyName}</ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <>
          <h1>No jobs applied!</h1>
          <div className="btn btn-primary btn-outline-signup">
            <Link to="/jobseeker/searchjobs">Search Jobs</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default JobseekerDashboard;

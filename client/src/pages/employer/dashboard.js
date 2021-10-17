import React from 'react';
import { Col, Row, Card, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { EMPLOYER_JOBS } from '../../utils/queries';
import './dashboard.css';

const EmployerDashboard = () => {
  const profile = Auth.getProfile();
  console.log(profile);

  const employerJobs = useQuery(EMPLOYER_JOBS);
  let appliedJobs = [];

  if (employerJobs && employerJobs.data && employerJobs.data.employerJobs) {
    appliedJobs = employerJobs.data.employerJobs;
  }

  return (
    <>
      <h1>Welcome, {profile.data.name}</h1>
      <hr />
      <Row xs={1} md={3} className="g-4">
        {appliedJobs.map((job) => (
          <Col key={job._id}>
            <Card style={{ width: 'auto' }}>
              <Card.Header className="bg-tertiary"><Card.Title>{job.jobTitle}</Card.Title></Card.Header>
              <Card.Body>
                
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{job.postDate}</ListGroupItem>
                <ListGroupItem>{job.jobLocation}</ListGroupItem>
                <ListGroupItem>{job.jobType}</ListGroupItem>
                <ListGroupItem>
                  {job.skills.map((s) => (
                    <Badge pill bg="tertiary">
                      {s}
                    </Badge>
                  ))}
                </ListGroupItem>
                <ListGroupItem className="font-weight-bold">Total Applicants: {job.users.length}</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default EmployerDashboard;

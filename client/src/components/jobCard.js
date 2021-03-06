import React, { useState } from 'react';
import { Col, Row, Card, ListGroup, ListGroupItem, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useQuery, useMutation } from '@apollo/client';
import { GET_JOBS, USER_APPLIED_JOBS } from '../utils/queries';
import { APPLY_JOB } from '../utils/mutations';

const JobCard = ({ jobTitle }) => {
  const [applyJob, { errorApplyJob }] = useMutation(APPLY_JOB);
  const { error, loading, data } = useQuery(GET_JOBS, {
    variables: { jobTitle },
  });
  const jobs = data?.jobs || [];

  const appliedJobsResult = useQuery(USER_APPLIED_JOBS);
  let appliedJobs = [];

  if (
    appliedJobsResult &&
    appliedJobsResult.data &&
    appliedJobsResult.data.userAppliedJobs
  ) {
    appliedJobs = appliedJobsResult.data.userAppliedJobs.map((a) => a._id);
  }

  const handleApplyJob = async (event, id) => {
    console.log(id);

    if (Auth.loggedIn()) {
      const { data } = await applyJob({
        variables: {
          jobId: id,
        },
      });

      if (data) {
        alert('Job applied!');
        window.location.assign('/jobseeker/searchjobs');  
      }
    } else {
      // make the user to login
      window.location.assign('login/jobseeker');
    }
  };

  return (
    <Row xs={1} md={3} className="g-4">
      {jobs.map((job) => (
        <Col key={job._id}>
          <Card style={{ width: 'auto' }}>
            <Card.Header className="bg-tertiary">
              <Card.Title>{job.jobTitle}</Card.Title>
            </Card.Header>
          
            <ListGroup className="list-group-flush">
              <ListGroupItem>{job.jobLocation}</ListGroupItem>
              <ListGroupItem>{job.salary}</ListGroupItem>
              <ListGroupItem>{job.employer.companyName}</ListGroupItem>
            </ListGroup>

            <Card.Body>
              <Card.Text>{job.jobDescription}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link>
                <Button
                  type="button"
                  onClick={(e) => handleApplyJob(e, job._id)}
                  disabled={appliedJobs.includes(job._id)}
                >
                  {appliedJobs.includes(job._id) ? 'Applied' : 'Apply'}
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

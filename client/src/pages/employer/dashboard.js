import React from 'react';
import { Link } from 'react-router-dom';

import { Col, Row, Card, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { EMPLOYER_JOBS } from '../../utils/queries';
import './dashboard.css';

const EmployerDashboard = () => {
  const profile = Auth.getProfile();

  const employerJobs = useQuery(EMPLOYER_JOBS);
  let postedJobs = [];

  if (employerJobs && employerJobs.data && employerJobs.data.employerJobs) {
    postedJobs = employerJobs.data.employerJobs;
  }

  return (
    <div className="mt-4 mb-4">
      <h1 style={{ textAlign: 'center'}}>Welcome, {profile.data.name}</h1>
      <hr />
      {postedJobs.length? (
         <Row xs={1} md={3} className="g-4">
         {postedJobs.map((job) => (
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
                   {job.skills.map((s, i) => (
                     <Badge pill bg="tertiary" key={i}>
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
      ): 
      <>
      <h1>No jobs posted!</h1>
          <div className="btn btn-primary btn-outline-signup">
            <Link to="/employer/postjobs">Post Jobs</Link>
          </div>
      </>}
     
    </div>
  );
};

export default EmployerDashboard;

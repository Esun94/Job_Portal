import React, {useEffect} from 'react';
import { Form, Col, Row, Button, Card, ListGroup, ListGroupItem, Container } from 'react-bootstrap';
import { useQuery, gql } from '@apollo/client';
import { GET_JOBS } from '../utils/queries';
import Auth from '../utils/auth';


const JobCard = () => {
    
    const { error, loading, data } = useQuery(GET_JOBS)
    const jobs = data?.jobs || [];

    // useEffect(() => {

    // }, [data]);

    return (
        <Row xs={1} md={3} className="g-4">
            {jobs.map((job) => (
                <Col>
                <Card style={{ width: 'auto'}}>
                    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
                    <Card.Body>
                        <Card.Title>{job.jobTitle}</Card.Title>
                        <Card.Text>
                        {job.jobDescription}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{job.jobLocation}</ListGroupItem>
                        <ListGroupItem>{job.salary}</ListGroupItem>
                        <ListGroupItem>{job.employer.companyName}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>{Auth.loggedIn() ? 
                    <Card.Link href="#">Apply Now</Card.Link> : 
                    <Card.Link href="#">Login to Apply</Card.Link>}
                    </Card.Body>
                </Card>
            </Col>
            ))
            }
        </Row>
    )
}




export default JobCard;

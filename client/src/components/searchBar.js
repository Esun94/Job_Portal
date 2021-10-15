import React, { useState } from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import JobCard from './jobCard';
import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../utils/queries';

const SearchBar = ({placeholder}) => {
  const [searchForm, setSearchForm] = useState({
    jobTitle: '',
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchForm({ ...searchForm, [name]: value });
  };

  const { error, loading, data } = useQuery(GET_JOBS, {
    variables: { ...searchForm },
  });
  const jobs = data?.jobs || [];

  return (
    <>
      <Container fluid="md">
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                type="search"
                placeholder={placeholder}
                onChange={handleInputChange}
                name="jobTitle"
              />
            </Col>
            <Col xs="auto">
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <hr />
      <div className="container">
        <JobCard jobs={jobs} />
      </div>
    </>
  );
};

export default SearchBar;

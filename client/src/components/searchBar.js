import React, { useState } from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import JobCard from './jobCard';


const SearchBar = () => {
  const [jobTitle, setJobTitle] = useState('');
  
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setSearchForm({ ...searchForm, [name]: value });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setJobTitle(event.target.jobTitle.value);
  }

  return (
    <>
      <Container className="mt-4" fluid="md">
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                type="search"
                placeholder="search jobs..."
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
        <JobCard jobTitle={jobTitle} />
      </div>
    </>
  );
};

export default SearchBar;

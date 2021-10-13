import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmployerSignup from '../components/signup/employerSignup';
import JobseekerSignup from '../components/signup/jobseekerSignup';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Signup = () => {
  const [userType, setuserType] = useState('');

  const handleChange = (event) => {
    setuserType(event.target.value);
  };

  return (
    <div className="container my-1">
      {/* <Link to={`/login/${userType}`}>
        ← Go to Login{' '}
        {userType ? userType[0].toUpperCase() + userType.substring(1) : ''}
      </Link> */}

      <h2>Signup</h2>

      <div>
        <DropdownButton id="dropdown-usertype" title="Select user type">
          <Dropdown.Item onClick={() => setuserType('jobseeker')}>
            Jobseeker
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setuserType('employer')}>
            Employer
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <hr></hr>
      {userType === '' ? (
        ''
      ) : userType === 'employer' ? (
        <EmployerSignup></EmployerSignup>
      ) : (
        <JobseekerSignup></JobseekerSignup>
      )}
    </div>
  );
};

export default Signup;

import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../assets/logo.jpg';
import './header.css';

const Header = () => {
  const linkStyle = { color: 'white', textDecoration: 'none' };
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          {Auth.getLoggedInUserType() === 'user' ? (
            <>
              <Link to="/jobseeker/dashboard" className="nav-link">
                Jobseeker Dashboard
              </Link>
              <Link to="/jobseeker/searchjobs" className="nav-link">
                Search job
              </Link>
              <Nav.Link href="#" onClick={() => Auth.logout()}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Link to="/employer/dashboard" className="nav-link">
                Employer Dashboard
              </Link>
              <Link to="/employer/postjobs" className="nav-link">
                Post job
              </Link>
              <Link to="/employer/jobpackages" className="nav-link">
                Job Post Packages
              </Link>
              <Nav.Link href="#" onClick={() => Auth.logout()}>
                Logout
              </Nav.Link>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          <Link style={linkStyle} to="/login/jobseeker" className="nav-link">
            Job-Seeker
          </Link>
          <Link style={linkStyle} to="/login/employer" className="nav-link">
            Employer
          </Link>
          <Link
            style={{ ...linkStyle, marginLeft: 'auto' }}
            className="justify-content-end nav-link"
            to="/signup"
          >
            Signup
          </Link>
        </>
      );
    }
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} width="240px" />
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">{showNavigation()}</Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

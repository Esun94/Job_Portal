import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../assets/logo.jpeg';



const Header = () => {
  const linkStyle = { color: 'white', textDecoration: 'none'};
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          {Auth.getLoggedInUserType() === 'user' ? (
            <>
            <Nav.Link><Link to="/searchjobs">Search job</Link></Nav.Link>
            <Nav.Link href="#" onClick={() => Auth.logout()}>logout</Nav.Link>
            </>
          ) : (
            <>
            <Nav.Link><Link to="/postjobs">Post job</Link></Nav.Link>
            <Nav.Link href="#" onClick={() => Auth.logout()}>logout</Nav.Link>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          <Nav>
            </Nav><Nav.Link><Link style={linkStyle} to="/login/jobseeker">Job-Seeker</Link></Nav.Link>
          <Nav.Link><Link style={linkStyle} to="/login/employer">Employer</Link></Nav.Link>
          <Nav.Link><Link style={{...linkStyle, marginLeft: 'auto'}} className="justify-content-end" to="/signup">Signup</Link></Nav.Link>
        </>
      );
    }
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} width="100"/>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
         {showNavigation()}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

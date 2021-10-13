import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const Header = () => {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          {Auth.getLoggedInUserType === 'user' ? (
            <ul className="flex-row">
              <li className="mx-1">
                <Link to="/searchjobs">
                  Search Jobs
                  {/* TODO: This section needs links based on logged in user/employer */}
                </Link>
              </li>
              <li className="mx-1">
                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <ul className="flex-row">
              <li className="mx-1">
                <Link to="/postjobs">
                  Post Jobs{' '}
                  {/* TODO: This section needs links based on logged in user/employer */}
                </Link>
              </li>
              <li className="mx-1">
                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          )}
        </>
      );
    } else {
      return (
        <ul className="flex-row space-between">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login/jobseeker">Job-Seeker Login</Link>
          </li>
          <li>
            <Link to="/login/employer">Employer Login</Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="briefcase bag">
            💼
          </span>
          -Job-Portal
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
};

export default Header;

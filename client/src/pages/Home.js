import React from 'react';
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="my-3 p-3">
          <h1>Welcome to Job-Portal</h1>
          <h2 className="display-5">
            Looking for right Talent? Searching new Job opportunities ?
          </h2>
          <p className="lead font-weight-normal">Sign up to get started!</p>
          <div className="btn btn-primary btn-outline-signup">
              <Link to="/signup" >Signup</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <SearchBar placeholder="Search for Jobs Here..." />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="container">
            <h1>Welcome to Job-Portal</h1>
            <div className="container">
                <SearchBar placeholder="Search for Jobs Here..."/>
            </div>
            <div>
                Looking for Talent or Searching Jobs? Sign up to get started!
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    )
}

export default Home;
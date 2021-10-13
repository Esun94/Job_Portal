import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <h1>Welcome to Job-Portal</h1>
            <div>
                Looking for Talent or Searching Jobs? Sign up to get started!
                <Link to="/signup">Signup</Link>
            </div>
        </>
    )
}

export default Home;
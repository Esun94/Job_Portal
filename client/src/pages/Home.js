import React from "react";
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        // <div className="container">
        //     <h1>Welcome to Job-Portal</h1>
        //     <div className="container">
        //         <SearchBar placeholder="Search for Jobs Here..."/>
        //     </div>
        //     <div>
        //         Looking for Talent or Searching Jobs? Sign up to get started!
        //         <Link to="/signup">Signup</Link>
        //     </div>
        // </div>

        <div className="container">
            <div className="container mt-4 mr-sm-2">
                    <SearchBar placeholder="Search for Jobs Here..."/>
            </div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                 <div class="my-3 p-3">
                    <h2 class="display-5">Looking for right Talent? Searching new Job opportunities ?</h2>
                    <p className="lead font-weight-normal">Sign up to get started!</p>
                    <div className="btn btn-outline-secondary"><Link to="/signup">Signup</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
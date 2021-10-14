import React from "react";
import SearchBar from '../components/searchBar';
import { Link } from 'react-router-dom';
import { Col, Card, CardColumns } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import JobList from '../components/JobList';
import { GET_JOBS } from "../utils/queries";





const Home = () => {

    const { loading, data } = useQuery(GET_JOBS);
    console.log(data);
    const jobs = data?.jobs || [];


    return (
        <div className="container">
            <h1>Welcome to Job-Portal</h1>
            <div className="container">
                <SearchBar placeholder="Search for Jobs Here..."/>
            </div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                 <div className="my-3 p-3">
                    <h2 className="display-5">Looking for right Talent? Searching new Job opportunities ?</h2>
                    <p className="lead font-weight-normal">Sign up to get started!</p>
                    <div className="btn btn-outline-secondary"><Link to="/signup">Signup</Link></div>
                </div>
                <div>
                    {loading ? (
                        <div>Loading...</div>
                    ): 
                    (<JobList
                        jobs={jobs}
                    />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;
import React from 'react';
import { Col, Card, CardColumns } from 'react-bootstrap';

const JobList = (jobs) => {
    if (!jobs.length) {
        return <h3>No Jobs Available</h3>;
    }

    console.log(jobs);

    return (
        <div>
            {jobs.map((job) => (
                    <div key={job._id} className="card">
                        <h3 className="card-header">{job.jobTitle}</h3>
                        <h4>{job.employer}</h4>
                        <h4>{job.jobLocation}</h4>
                        <h4>{job.jobDescription}</h4>
                        <h4>{job.salary}</h4>
                    </div>
                ))}
        </div>
        );
};

export default JobList;



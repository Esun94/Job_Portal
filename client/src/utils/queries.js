import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      _id
      firstName
      lastName
      email
      phone
      password
      resume
      skill
      locationPreference
      jobtypePreference
      salaryRange
      savedJobs {
        _id
        jobTitle
      }
    }
  }
`;

export const GET_EMPLOYER = gql`
  query employer($id: ID!) {
    employer(id: $id) {
      companyName
      address
      city
      state
      website
      email
      phone
      accountManagername
      accountManageremail
      accountManagerphone
    }
  }
`;

export const GET_JOBS = gql`
  query jobs($id: ID, $jobTitle: String) {
    jobs(id: $id, jobTitle: $jobTitle) {
      _id
      postDate
      jobTitle
      jobLocation
      jobType
      salary
      jobDescription
      skills
      employer {
        _id
        companyName
      }
    }
  }
`;

export const USER_APPLIED_JOBS = gql`
  query userAppliedJobs {
    userAppliedJobs {
      _id
      jobTitle
      jobLocation
      jobType
      employer {
        companyName
        website
      }
    }
  }
`;

export const EMPLOYER_JOBS = gql`
  query employerJobs {
    employerJobs {
      _id
      postDate
      jobTitle
      jobLocation
      jobType
      skills
      employer {
        _id
        companyName
      }
      users {
        _id
        firstName
        lastName
        email
        phone
        resume
      }
    }
  }
`;

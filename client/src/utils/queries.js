import { gql } from '@apollo/client';

export const GET_USER = gql`
    query user($id: ID!){
        user(id:$id) {
        _id
        firstName
        lastName
        userName
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
`;

export const GET_EMPLOYER = gql`
query employer ($id: ID!) {
    employer(id:$id) {
          companyName
          address
          city
          state
          website
          userName
          email
          phone
          accountManagername
          accountManageremail
          accountManagerphone
    }
  }
`;

export const GET_JOBS = gql`
  
`
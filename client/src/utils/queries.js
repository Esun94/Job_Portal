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
`

export const GET_EMPLOYER = gql`
    
`
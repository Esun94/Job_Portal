import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// TODO: Add Create user mutation
//Mutation to signup as job seeker
export const ADD_USER = gql`
  mutation addUser($args: NewUserInput) {
    addUser(user: $args) {
      token
      user {
        _id
        firstName
        lastName
        userName
        email
        phone
        resume
        skill
        locationPreference
        jobtypePreference
        salaryRange
      }
    }
  }
`;

export const ADD_EMPLOYER = gql`
  mutation addUser($args: NewEmployerInput) {
    addUser(user: $args) {
      token
      employer {
        _id
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
  }
`;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
    phone: String!
    password: String!
    resume: String
    skill: [String]
    locationPreference: String
    jobtypePreference: String
    salaryRange: String
  }

  type Employer {
    _id: ID
    companyName: String!
    address: String!
    city: String!
    state: String!
    website: String!
    userName: String!
    email: String!
    password: String!
    phone: String!
    accountManagername: String!
    accountManageremail: String!
    accountManagerphone: String!
  }

  scalar Date
  type Jobs {
    _id: ID!
    postDate: Date
    jobTitle: String!
    jobLocation: String!
    jobType: String!
    salary: String!
    jobDescription: String!
    skills: [String!]
    employer: Employer
    users: [User]
  }

  type JobPackage {
    _id: ID!
    packageName: String
    packageDuration: String
    price: Float
  }
`;

module.exports = typeDefs;

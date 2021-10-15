const { gql } = require('apollo-server-express');

const typeDefs = gql`
type JobPackage {
  _id: ID
  packageName: String
  packageDuration: String
  price: Float
}

type Employer {
  _id: ID
  companyName: String
  address: String
  city: String
  state: String
  zipCode: String
  website: String
  email: String
  password: String
  phone: String
  accountManagername: String
  accountManageremail: String
  accountManagerphone: String
}

scalar Date
type Job {
  _id: ID
  postDate: Date
  jobTitle: String
  jobLocation: String
  jobType: String
  salary: String
  jobDescription: String
  skills: [String]
  employer: Employer
  user: User
}

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
    password: String
    resume: String
    skill: [String]
    locationPreference: String
    jobtypePreference: String
    salaryRange: String
    savedJobs: [Job]
  }

  type Auth {
    token: ID
    user: User
    employer: Employer
  }

  type Query {
    user(id: ID!): User
    employer(id: ID!): Employer
    jobs(id: ID, jobTitle: String): [Job]
    employerJobs: [Job]
  }

  input NewUserInput {
    firstName: String
    lastName: String
    email: String
    phone: String
    password: String
    resume: String
    skill: [String]
    locationPreference: String
    jobtypePreference: String
    salaryRange: String
  }

  input NewEmployerInput {
    companyName: String
    address: String
    city: String
    state: String
    zipCode: String
    website: String
    email: String
    password: String
    phone: String
    accountManagername: String
    accountManageremail: String
    accountManagerphone: String
  }

  input NewJobInput {
    postDate: Date
    jobTitle: String
    jobLocation: String
    jobType: String
    salary: String
    jobDescription: String
    skills: [String]
  }

  type Mutation {
    login(email: String, password: String): Auth

    addUser(
      firstName: String!,
      lastName: String
      email: String,
      phone: String,
      password: String,
      resume: String,
      skill: [String],
      locationPreference: String,
      jobtypePreference: String,
      salaryRange: String): Auth

    addEmployer(
      companyName: String,
      address: String,
      city: String,
      state: String,
      zipCode: String,
      website: String,
      email: String,
      password: String,
      phone: String,
      accountManagername: String,
      accountManageremail: String,
      accountManagerphone: String): Auth
    
    addJob(
      postDate: Date
      jobTitle: String
      jobLocation: String
      jobType: String
      salary: String
      jobDescription: String
      skills: String
      employer: ID): Job

    deleteJob(jobId: ID!): Job
    
    applyJob(
      jobId: String!
    ): Job

    saveJob(
      jobId: String
      jobTitle: String,
      jobLocation: String,
      jobType: String,
      salary: String,
      jobDescription: String,
      skills: [String],
      employer: ID!): User
      
    removeJob(jobId: ID!): User

    applyToJob(userId: ID!): Job

  }
`;

module.exports = typeDefs;

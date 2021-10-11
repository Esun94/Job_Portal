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
  website: String
  userName: String
  email: String
  password: String
  phone: String
  accountManagername: String
  accountManageremail: String
  accountManagerphone: String
}

scalar Date
type Jobs {
  _id: ID
  postDate: Date
  jobTitle: String
  jobLocation: String
  jobType: String
  salary: String
  jobDescription: String
  skills: [String]
  employer: Employer
}

  type User {
    _id: ID!
    firstName: String
    lastName: String
    userName: String
    email: String
    phone: String
    password: String
    resume: String
    skill: [String]
    locationPreference: String
    jobtypePreference: String
    salaryRange: String
    savedJobs: [Jobs]
  }


  

  type Auth {
    token: ID
    user: User
    employer: Employer

  type Query {
    user(id: ID!): User
    employer(id: ID!): Employer
    jobs: [Jobs]
  }

  input NewUserInput {
    firstName: String
    lastName: String
    userName: String
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
    website: String
    userName: String
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
    addUser(user: NewUserInput): Auth
    addEmployer(employer: NewEmployerInput): Auth
    
    addJob(job: NewJobInput): Job
    deleteJob(jobId: ID!): Job
    saveJob(job: NewJobInput): User
    removeJob(jobId: ID!): User
  }
`;

module.exports = typeDefs;

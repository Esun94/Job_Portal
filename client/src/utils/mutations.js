import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email:$email, password:$password) {
      token
      }
    }
  }
`;

export const CREATE_USER = gql`
mutation addUser($firstName: String!,
    $lastName: String,
    $userName: String,
    $email: String,
    $phone: String,
    $password: String,
    $resume: String,
    $skill: String,
    $locationPreference: String,
    $jobtypePreference: String,
    $salaryRange: String) {
    addUser(firstName: $firstName,
        lastName: $lastName,
        userName: $userName,
        email: $email,
        phone: $phone,
        password: $password,
        resume: $resume,
        skill: [$skill],
        locationPreference: $locationPreference,
        jobtypePreference: $jobtypePreference,
        salaryRange: $salaryRange) {
      token     
    }
}
`;

export const CREATE_EMPLOYER = gql`
mutation ($companyName: String,
    $address: String,
    $city: String,
    $state: String,
    $website: String,
    $userName: String,
    $email: String,
    $password: String,
    $phone: String,
    $accountManagername: String,
    $accountManageremail: String,
    $accountManagerphone: String) {
    addEmployer(
        companyName: $companyName,
        address: $address,
        city: $city,
        state: $state,
        website: $website,
        userName: $userName,
        email: $email,
        password: $password,
        phone: $phone,
        accountManagername: $accountManagername,
        accountManageremail: $accountManageremail,
        accountManagerphone: $accountManagerphone) {
      token
}
}
`;

export const ADD_JOB = gql`
mutation ($job:NewJobInput) {
	addJob(job:$job) {
        _id
        jobTitle
        jobDescription
        jobType
        salary
        jobDescription
        skills
  }
}
`;

export const DELETE_JOB = gql`
mutation ($jobId:ID!) {
    deleteJob(jobId: $jobId) {
      jobTitle
    }
  }
`;

export const SAVE_JOB = gql`
mutation ($jobTitle: String,
    $jobLocation: String,
    $jobType: String,
    $salary: String,
    $jobDescription: String,
    $skills: [String],
    $employer: ID!) {
    saveJob (jobTitle: $jobTitle,
        jobLocation: $jobLocation,
        jobType: $jobType,
        salary: $salary,
        jobDescription: $jobDescription,
        skills: $skills,
        employer: $employer) {
            savedJobs {
            _id
            jobTitle
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
}
`;

export const REMOVE_JOB = gql`
mutation ($jobId: ID!) {
    removeJob(jobId:$jobId) {
      _id
      firstName
      lastName
      userName
      savedJobs {
              _id
        jobTitle
      }
    }
  } 
`;
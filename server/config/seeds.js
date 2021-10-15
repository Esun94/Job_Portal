const db = require('./connection');
const { User, Employer, JobPackage, Job } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    firstName: 'Rachel',
    lastName: 'Green',
    email: 'raygreen@testmail.com',
    phone: '888-888-8888',
    password: 'password12345',
    resume: 'Resume-Rachel',
    skill: ['HTML', 'CSS', 'JS'],
    locationPreference: 'New Jersey',
    salaryRange: '$80- 100K',
  });

  await User.create({
    firstName: 'Ross',
    lastName: 'Geller',
    email: 'rgeller@testmail.com',
    phone: '888-000-8888',
    password: 'password12345',
    resume: 'Resume-Ross',
    skill: ['HTML', 'CSS', 'JS', 'MongDb'],
    locationPreference: 'New York',
    salaryRange: '$120- 140K',
  });

  await User.create({
    firstName: 'Joey',
    lastName: 'Tribbiani',
    email: 'jtrib@testmail.com',
    phone: '881-000-8881',
    password: 'password12345',
    resume: 'Resume-Joey',
    skill: ['HTML', 'CSS', 'JS', 'MongDb', 'Express'],
    locationPreference: 'New Hampshire',
    salaryRange: '$120- 140K',
  });

  await User.create({
    firstName: 'Arya',
    lastName: 'Stark',
    email: 'astark@testmail.com',
    phone: '581-000-8881',
    password: 'password12345',
    resume: 'Resume-Arya',
    skill: ['HTML', 'CSS', 'JS', 'SQL', 'Express'],
    locationPreference: 'Washington',
    salaryRange: '$120- 140K',
  });

  await User.create({
    firstName: 'Jon',
    lastName: 'Snow',
    email: 'jsnow@testmail.com',
    phone: '581-000-8881',
    password: 'password12345',
    resume: 'Resume-Jon',
    skill: ['Testing', 'HTML', 'CSS', 'JS', 'SQL', 'Express'],
    locationPreference: 'California',
    salaryRange: '$250- 300K annual',
  });

  console.log('users seeded');

  await Employer.deleteMany();

  await Employer.create({
    companyName: 'Facebook Inc',
    email: 'fbuser@test.com',
    password: 'password12345',
    address: '1 Hacker way',
    city: 'Menlo Park',
    state: 'California',
    zipCode: '94025',
    phone: '408-510-0000',
    website: 'www.facebook.com',
    accountManagername: 'Lena Hadley',
    accountManageremail: 'lena@test.com',
    accountManagerphone: '408-510-0007',
  });

  await Employer.create({
    companyName: 'Google LLC',
    email: 'googleuser@test.com',
    password: 'password12345',
    address: '1 Infinity way',
    city: 'Mountain View',
    state: 'California',
    zipCode: '95014',
    phone: '414-999-0000',
    website: 'www.google.com',
    accountManagername: 'Brandon Stark',
    accountManageremail: 'brandon@test.com',
    accountManagerphone: '414-999-0007',
  });

  await Employer.create({
    companyName: 'Microsoft Corporation',
    email: 'msuser@test.com',
    password: 'password12345',
    address: 'Redmon',
    city: 'Redmond',
    state: 'Washington',
    zipCode: '98008',
    phone: '808-999-0000',
    website: 'www.microsoft.com',
    accountManagername: 'Sansa Stark',
    accountManageremail: 'sansa@test.com',
    accountManagerphone: '808-999-0007',
  });
  console.log('employers seeded');

  await JobPackage.deleteMany();

  await JobPackage.insertMany([
    { packageName: 'Basic', packageDuration: '1 year', price: '100.00' },
    { packageName: 'Advanced', packageDuration: '1 year', price: '500.00' },
    { packageName: 'Premium', packageDuration: '1 year', price: '1000.00' },
  ]);
  console.log('job packages seeded');

  const employer1 = await Employer.findOne({
    companyName: 'Facebook Inc'
  });

  const employer2 = await Employer.findOne({
    companyName: 'Microsoft Corporation'
  });
  
  await Job.deleteMany();

  await Job.insertMany([
    {
      jobTitle: 'UI Developer',
      jobLocation: 'New York City, NY',
      jobType: 'Contract',
      salary: '$75/hr',
      jobDescription: `Work with the architect technical lead, and other technical staff and participate in all phases of software
      development from analysis through design, development, and testing. Analyze product requirements and design a highly configurable and intuitive product.`,
      skills: ['HTML', 'CSS', 'JavaScript', 'MVC design pattern'],
      employer: employer1._id
    },
    {
      jobTitle: 'Front End Developer',
      jobLocation: 'New York City, NY',
      jobType: 'Contract',
      salary: '$100,000',
      jobDescription: `Work with the architect technical lead, and other technical staff and participate in all phases of software
      development from analysis through design, development, and testing. Analyze product requirements and design a highly configurable and intuitive product.`,
      skills: ['HTML', 'CSS', 'Javascript'],
      employer: employer1._id
    },
    {
      jobTitle: 'Backend Developer',
      jobLocation: 'Michigan',
      jobType: 'Full-Time',
      salary: '$75/hr',
      jobDescription: `Work with the architect technical lead, and other technical staff and participate in all phases of software
      development from analysis through design, development, and testing. Analyze product requirements and design a highly configurable and intuitive product.`,
      skills: ['Node', 'Express'],
      employer: employer2._id
    }
  ]);

  process.exit();
});
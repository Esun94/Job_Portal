const db = require('./connection');
const { User, Employer, Job, JobPackage } = require('../models');

db.once('open', async () => {

  console.log('DB Test started ....');

  const users = await User.find({}).populate({
    path: 'orders.products',
    populate: 'category'
  });
  console.log("users: ", JSON.stringify(users, null, 2));



  process.exit();
});

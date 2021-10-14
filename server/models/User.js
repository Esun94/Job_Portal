const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Job = require('./Job');

// const jobSchema = require('./Job');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  resume: {
    type: String,
    required: false
  },
  skill: [{
    type: String
  }],
  locationPreference: {
    type: String,
    trim: true
  }, 
  jobtypePreference: {
    type: String,
    trim: true
  }, 
  salaryRange: {
    type: String,
    trim: true
  },
  savedJobs: [Job.schema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

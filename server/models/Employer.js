const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const employerSchema = new Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  }, 
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  website: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  accountManagername: {
    type: String,
    required: true,
    trim: true
  },
  accountManageremail: {
    type: String,
    required: true,
    trim: true
  },
  accountManagerphone: {
    type: String,
    required: true,
    trim: true
  },
});

// set up pre-save middleware to create password
employerSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
employerSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;

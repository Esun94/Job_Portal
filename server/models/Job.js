const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema, model } = mongoose;

const jobSchema = new Schema({
  postDate: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  jobTitle: {
    type: String,
    required: true,
    trim: true,
  },
  jobLocation: {
    type: String,
    required: true,
    trim: true,
  },
  jobType: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: String,
    required: true,
    trim: true,
  },
  jobDescription: {
    type: String,
    required: true,
    trim: true,
  },
  skills: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
  employer: {
    type: Schema.Types.ObjectId,
    ref: 'Employer',
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

jobSchema.pre('save', async function (next) {
  if (this.skills.length === 1) {
    this.skills = this.skills[0].split(',');
  }

  next();
});

const Job = model('Job', jobSchema);
module.exports = Job;

const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const jobSchema = new Schema({
    postDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    jobTitle: {
        type: String,
        required: true,
        trim: true
    },
    jobLocation: {
        type: String,
        required: true,
        trim: true
    }, 
    jobType: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        type: String,
        required: true,
        trim: true
    },
    jobDescription: {
        type: String,
        required: true,
        trim: true
    },
    skills: [{
        type: String,
        required: true,
        trim: true
    }],
    employer: {
        type: Schema.Types.ObjectId,
        ref: 'Employer'
    }
});

const Job = mongoose.model('Job', jobSchema)
module.exports = Job;
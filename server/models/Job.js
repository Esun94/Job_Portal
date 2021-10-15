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
    },
<<<<<<< HEAD
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
=======
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
>>>>>>> 79c281f136ae39da585ba3f4abc41c71d70578a0
});

const Job = model('Job', jobSchema)
module.exports = Job;
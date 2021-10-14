const { User, Employer, Job, JobPackage } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

// const jobSchema = require('../models/Job');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    employer: async (parent, args, context) => {
      if (context.user) {
        return Employer.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    jobs: async () => {
      return Job.find().populate("employer");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addEmployer: async (parent, args) => {
      const employer = await Employer.create(args);
      const token = signToken(employer);
      return { token, employer };
    },
    login: async (parent, { email, password }) => {
      const userProfile = await User.findOne({ email });
      const employerProfile = await Employer.findOne({ email });

      if (!userProfile && !employerProfile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      if (userProfile) {
        const correctUserPw = await userProfile.isCorrectPassword(password);
        if (!correctUserPw) {
          throw new AuthenticationError(
            'Invalid credentials, please try again'
          );
        }
        const token = signToken(userProfile, 'user');
        return { token, userProfile };
      } else if (employerProfile) {
        const correctEmployerPw = await employerProfile.isCorrectPassword(
          password
        );
        if (!correctEmployerPw) {
          throw new AuthenticationError(
            'Invalid credentials, please try again'
          );
        }
        const token = signToken(employerProfile, 'employer');
        return { token, employerProfile };
      }
    },
    addJob: async (parent, { job }) => {
      return Job.create(job);
    },
    deleteJob: async (parent, { jobId }) => {
      return Job.findOneAndDelete({ _id: jobId });
    },
    saveJob: async (parent, args, context) => {
      console.log('save jobs: ', args);
      const job = { ...args };
      job.employer = mongoose.Types.ObjectId(args.employer);
      console.log('save jobs2: ', job);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedJobs: job } },
          { new: true }
        ).populate({
          path: 'savedJobs',
          populate: 'employer',
        });
        return updatedUser;
      }
    },
    removeJob: async (parent, { jobId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedJobs: { _id: jobId } } },
          { new: true }
        );
        return updatedUser;
      }
    },
    searchJobs: async (parent, { jobTitle }) => {
      const result = await Job.find({
        jobTitle: { $regex: jobTitle, $options: 'i' },
      }).populate('employer');

      return result;
    },
  },
};

module.exports = resolvers;

const { User, Employer, Job } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

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
    jobs: async (parent, { id, jobTitle }, context) => {
      if (id) {
        return Job.find({ _id: id }).populate('employer');
      } else if (jobTitle) {
        const result = await Job.find({
          jobTitle: { $regex: jobTitle, $options: 'i' },
        }).populate('employer');

        return result;
      } else {
        return Job.find().populate('employer');
      }
    },

    employerJobs: async (parent, args, context) => {
      const result = await Job.find({
        employer: context.user._id,
      });
      return result;
    },
    userAppliedJobs: async(parent, args, context) => {
      const result = await Job.find({
        users: context.user._id,
      }).populate('employer');
      return result;
    }
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
        const userInfo = {
          name: `${userProfile.firstName} ${userProfile.lastName}`,
          _id: userProfile._id, 
          email: userProfile.email
        }
        const token = signToken(userInfo, 'user');
        return { token, userInfo };
      } else if (employerProfile) {
        const correctEmployerPw = await employerProfile.isCorrectPassword(
          password
        );
        if (!correctEmployerPw) {
          throw new AuthenticationError(
            'Invalid credentials, please try again'
          );
        }
        const userInfo = {
          name: `${employerProfile.companyName}`,
          _id: employerProfile._id, 
          email: employerProfile.email
        }
        const token = signToken(userInfo, 'employer');
        return { token, userInfo };
      }
    },

    addJob: async (parent, args) => {
      console.log(args);
      const addJob = await Job.create(args);

      return addJob;
      
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

    applyJob: async (parent, { jobId }, context) => {
      if (context.user) {
        const updateJobApplication = await Job.findOneAndUpdate(
          {
            _id: jobId,
          },
          {
            $push: { users: context.user._id },
          },
          {
            new: true,
          }
        ).populate('employer');
        return updateJobApplication;
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
  },
};

module.exports = resolvers;

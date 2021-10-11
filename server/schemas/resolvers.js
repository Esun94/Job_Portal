const { User, Employer, Jobs, JobPackage} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError("You need to be logged in!")
        },
        employer: async (parent, args, context) => {
            if (context.user) {
                return Employer.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError("You need to be logged in!")
        },
        
    }
}
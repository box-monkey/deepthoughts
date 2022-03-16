// -- this file returns the data outlined in typeDefs.

const { User, Thought } = require("../models");

const resolvers = {
  Query: {
    // parent only a placeholder variable, need to use second param
    // get all users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("thoughts")
        .populate("friends");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("thoughts");
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    },
  },
};

module.exports = resolvers;

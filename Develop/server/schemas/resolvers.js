// const { Tech, Matchup } = require('../models'); previous models

const { User } = require('../models');
const { signToken }  = require('../utils/auth')

const resolvers = {
  Query: {
    // tech: async () => {
    //   return Tech.find({});
    // },
    me: async (parent, { user }) => {
      if (user) {
        const findUser = await User.findOne({_id: user._id});
        return findUser
      } else {
        new Error('could not find user by id')
      }
      
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)
      return {token, user};
    },

    
    login: async (parent, { email, password }) => {
      const user = await User.findOne(
        {
          email
        }
      );

      const passwordCompare = await user.isCorrectPassword(password)
      if (!passwordCompare || !user) {
        new Error("email or password doesn't match")
      }
      const token = signToken(user)
      return {token, user};
    },

    addBook: async (parent, {bookData}, {user}) => {
      if (user) {
        const updateUser = await user.findByIdAndUpdate(
          {_id: user._id},
          {$push:{savedBooks: bookData}},
          {new: true}
        )
        return updateUser
      } else {
        new Error('user could not be found')
      }
    },

    deleteBook: async (parent, {bookId}, {user}) => {
      if (user) {
        const updateUser = await user.findByIdAndUpdate(
          {_id: user._id},
          {$pull:{savedBooks: {bookId}}},
          {new: true}
        )
        return updateUser
      } else {
        new Error('user could not be found')
      }
    }
  },
};

module.exports = resolvers;

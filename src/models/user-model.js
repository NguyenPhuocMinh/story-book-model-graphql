'use strict';

const { GraphQLNonNull, GraphQLString, GraphQLBoolean } = require('winext-repo-store').graphql;

module.exports = {
  name: 'UserModel',
  attributes: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    passwordConfirm: { type: new GraphQLNonNull(GraphQLString) },
    permissions: [GraphQLString],
    rememberMe: { type: GraphQLBoolean },
    photoURL: { type: GraphQLString },
    //filter
    slug: { type: GraphQLString },
    deleted: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    updatedBy: { type: GraphQLString },
  },
  options: {
    collection: 'users',
    description: 'User schema',
  },
};

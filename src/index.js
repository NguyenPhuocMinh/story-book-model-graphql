'use strict';

const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLString } =
  require('winext-repo-store').graphql;

const AuthorModel = require('./models/author-model');
const PostModel = require('./models/post-model');

/**
 * Query
 */
const queryRootSchema = new GraphQLObjectType({
  name: 'QueryRootAppSchema',
  description: 'Application Query Schema Root',
  fields: () => ({
    authors: {
      type: new GraphQLList(AuthorModel),
      description: 'List of all Authors',
      resolve: function (author) {
        return [author];
      },
    },
    posts: {
      type: new GraphQLList(PostModel),
      description: 'List of all Posts',
      resolve: function (post) {
        return [post];
      },
    },
  }),
});
/**
 * Mutation
 */
const mutationRootSchema = new GraphQLObjectType({
  name: 'MutationRootAppSchema',
  description: 'Application Mutation Schema Root',
  fields: () => ({
    author: {
      type: AuthorModel,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        return args;
      },
    },
  }),
});

const schemas = new GraphQLSchema({
  query: queryRootSchema,
  mutation: mutationRootSchema,
});

module.exports = schemas;

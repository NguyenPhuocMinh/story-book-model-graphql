'use strict';

const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require('winext-repo-store').graphql;

const AuthorModel = require('./models/author-model');
const PostModel = require('./models/post-model');

const queryRootSchema = new GraphQLObjectType({
  name: 'QueryRootAppSchema',
  description: 'Application Schema Root',
  fields: () => ({
    authors: {
      type: GraphQLList(AuthorModel),
      description: 'List of all Authors',
      resolve: function () {
        return [];
      },
    },
    posts: {
      type: GraphQLList(PostModel),
      description: 'List of all Posts',
      resolve: function () {
        return [];
      },
    },
  }),
});

const schemas = new GraphQLSchema({
  query: queryRootSchema,
});

module.exports = schemas;

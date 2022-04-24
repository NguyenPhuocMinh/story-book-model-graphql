'use strict';

const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require('winext-repo-store').graphql;

const AuthorModel = require('./models/author-model');
const PostModel = require('./models/post-model');

const queryRootSchema = new GraphQLObjectType({
  name: 'QueryRootAppSchema',
  description: 'Application Schema Root',
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

const schemas = new GraphQLSchema({
  query: queryRootSchema,
});

module.exports = schemas;

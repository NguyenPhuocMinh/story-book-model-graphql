'use strict';

const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('winext-repo-store').graphql;
const AuthorModel = require('./author-model');

const PostModel = new GraphQLObjectType({
  name: 'Post',
  description: 'Post schema',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorModel,
      resolve: function (post) {
        return post;
      },
    },
  }),
});

module.exports = PostModel;

'use strict';

const { GraphQLNonNull, GraphQLString } = require('winext-repo-store').graphql;

module.exports = {
  name: 'PostModel',
  attributes: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: 'AuthorModel',
      resolve: function (post) {
        return post;
      },
    },
  },
  options: {
    collection: 'posts',
    description: 'Post schema',
  },
};

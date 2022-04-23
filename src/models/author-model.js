'use strict';

const { GraphQLNonNull, GraphQLString } = require('winext-repo-store').graphql;

module.exports = {
  name: 'AuthorModel',
  attributes: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  options: {
    collection: 'authors',
    description: 'Author schema',
  },
};

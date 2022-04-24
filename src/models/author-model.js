'use strict';

const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('winext-repo-store').graphql;

const AuthorModel = new GraphQLObjectType({
  name: 'Author',
  description: 'Author schema',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = AuthorModel;

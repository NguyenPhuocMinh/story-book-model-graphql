'use strict';

const UserModel = require('./models/user-model');
const AuthorModel = require('./models/author-model');
const PostModel = require('./models/post-model');

const models = [
  UserModel,
  AuthorModel,
  PostModel
];

module.exports = models;

const { Post } = require('./Models/Post/Post');
const { User } = require('./Models/User/User');
const { UserPost } = require('./Models/UserPost/UserPost');
const { db } = require('./db');

Post.belongsToMany(User, { through: UserPost });
User.belongsToMany(Post, { through: UserPost });

module.exports = { User, Post, UserPost, db };

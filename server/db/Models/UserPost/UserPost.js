const { db } = require('../../db');
const { DataTypes } = require('sequelize');

const UserPost = db.define('userposts', {
    userId: {
        type: DataTypes.INTEGER,
    },
    postId: {
        type: DataTypes.INTEGER,
    },
});

module.exports = { UserPost };

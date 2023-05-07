const { db } = require('../../db');
const { DataTypes } = require('sequelize');

const Post = db.define('post', {
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = { Post };

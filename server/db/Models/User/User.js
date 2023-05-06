const { db } = require('../db');
const { DataTypes } = require('sequelize');

const User = db.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        alloNull: false,
    },
});

module.exports = { User };

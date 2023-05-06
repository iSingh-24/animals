const { db } = require('../../db');
const { DataTypes } = require('sequelize');

const Animal = db.define('animal', {
    species: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = { Animal };

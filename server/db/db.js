const Sequelize = require('sequelize');

const config = {
    logging: false,
};

const db = new Sequelize(
    process.env.DATABASE_URL || 'postgres://localhost/animalsdb',
    config
);

module.exports = { db };

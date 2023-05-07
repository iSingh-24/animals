const { db } = require('./relationships');

const init = async () => {
    try {
        await db.authenticate();
        await db.sync({ force: true });
        // await db.query('DROP TABLE IF EXISTS userposts'); //this command will drop a table if it exists and needs to be
        // //executed AFTER you connect/sync to the database
        console.log('data base is connected');
    } catch (error) {
        console.log(error);
    }
};

init();

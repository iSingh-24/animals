const { db } = require('./db');

const init = async () => {
    try {
        await db.sync({ force: true });
    } catch (error) {
        console.log(error);
    }
};

init();

const { db } = require('./db');
const { User } = require('./Models/User/User');
const { Animal } = require('./Models/Animal/Animal');

const init = async () => {
    try {
        await db.sync({ force: true });

        await User.create({ firstName: 'John', lastName: 'Johnson' });
        await Animal.create({ species: 'Dog' });
        console.log('data base is connected');
    } catch (error) {
        console.log(error);
    }
};

init();

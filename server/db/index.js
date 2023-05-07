const { db } = require('./db');

const { Post, User, UserPost } = require('./relationships');

const init = async () => {
    try {
        await db.authenticate();
        // await db.query('DROP TABLE IF EXISTS animals'); //this command will drop a table if it exists
        await db.sync({ force: true });
        // const firstMessage = await Post.create({
        //     message: 'this is a test message',
        // });
        const secondMessage = await Post.create({
            message: 'this is another test message',
        });
        const testUser = await User.create({
            firstName: 'Riley',
            lastName: 'gonzalez',
        });

        // secondMessage.setUser(testUser);

        console.log('data base is connected');
        // await db.close();
    } catch (error) {
        console.log(error);
    }
};

init();

Post.belongsToMany(User, { through: UserPost });
User.belongsToMany(Post, { through: UserPost });

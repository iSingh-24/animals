const router = require('express').Router();
const { User } = require('../db/relationships');

router.get('/', (req, res) => {
    try {
        console.log(req.body, 'here is req body');
        res.send('User route is getting hit correctly');
    } catch (error) {
        console.log(`here is the error ${error}`);
    }
});

router.post('/', async (req, res) => {
    try {
        const { firstName } = req.body;
        const lastName = 'defaultName';
        const createdUser = await User.create({ firstName, lastName });
        console.log(createdUser, 'here is created user');
        // res.send(createdUser);
        res.send(createdUser);
    } catch (error) {
        console.log(`here is the post error for user ${error}`);
    }
});

module.exports = router;

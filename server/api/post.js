const router = require('express').Router();
const { Post } = require('../db/relationships');

router.get('/', (req, res) => {
    try {
        console.log(req.body, 'here is req body');
        res.send('post router is getting hit');
    } catch (error) {
        console.log(`posts model in the backend error is ${error}`);
    }
});

router.post('/', async (req, res) => {
    try {
        const { message } = req.body;
        const createdPost = await Post.create({ message });
        res.send(createdPost);
    } catch (error) {
        console.log(
            `post route wasn't hit for posts and the error is ${error}`
        );
    }
});

module.exports = router;

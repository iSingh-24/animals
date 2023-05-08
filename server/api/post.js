const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.send('post router is getting hit');
    } catch (error) {
        console.log(`posts model in the backend error is ${error}`);
    }
});

router.post('/', (req, res) => {
    try {
        res.send('post route for post models is getting hit');
    } catch (error) {
        console.log(
            `post route wasn't hit for posts and the error is ${error}`
        );
    }
});

module.exports = router;

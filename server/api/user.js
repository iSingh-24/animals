const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.send('User route is getting hit correctly');
    } catch (error) {
        console.log(`here is the error ${error}`);
    }
});

router.post('/', (req, res) => {
    try {
        res.send('user post is getting hit');
    } catch (error) {
        console.log(`here is the post error for user ${error}`);
    }
});

module.exports = router;

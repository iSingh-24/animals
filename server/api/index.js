//import all the router related stuff here
const router = require('express').Router();

//you will basically be using a router to connect with other routers

const post = require('./post');
const user = require('./user');

router.use('/user', user);
router.use('/post', post);

module.exports = router;

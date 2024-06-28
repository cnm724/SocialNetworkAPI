const router = require('express').Router();
const userRoute = require('./userRoute');
const thoughtsRoute = require('./thoughtsRoute');

router.use('/user', userRoute);
router.use('/thoughts', thoughtsRoute);

module.exports = router;

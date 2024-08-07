const router = require('express').Router();
const userRoute = require('./userRoute');
const thoughtsRoute = require('./thoughtsRoute');

//  /api/

router.use('/users', userRoute);
router.use('/thoughts', thoughtsRoute);

module.exports = router;

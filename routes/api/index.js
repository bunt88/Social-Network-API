const router = require('express').Router();

const thoughtRouter  = require('./thoughtRoutes');
const userRouter  = require('./userRoutes');


router.use('/users', userRouter);
router.use('/thoughts', thoughtRouter);


module.exports = router;
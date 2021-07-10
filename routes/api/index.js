const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tokenRoute = require('./token');

router.use('/user', userRoutes);
router.use('/user/token', tokenRoute);

module.exports = router;
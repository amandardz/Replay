const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tokenRoute = require('./token');
const youtubeRoute = require('./youtube')

router.use('/user', userRoutes);
router.use('/user/token', tokenRoute);
router.use('/youtube', youtubeRoute);

module.exports = router;
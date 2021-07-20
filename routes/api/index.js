const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tokenRoute = require('./token');
const playlistRoutes = require('./playlistRoutes');

router.use('/user', userRoutes);
router.use('/playlist', playlistRoutes);
router.use('/user/token', tokenRoute);

module.exports = router;
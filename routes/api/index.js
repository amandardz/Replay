const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tokenRoute = require('./token');

const youtubeRoute = require('./youtube')

const playlistRoutes = require('./playlistRoutes');


router.use('/user', userRoutes);
router.use('/playlist', playlistRoutes);
router.use('/youtube', youtubeRoute);

module.exports = router;
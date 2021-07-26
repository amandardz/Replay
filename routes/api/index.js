const router = require('express').Router();
const userRoutes = require('./userRoutes');
const youtubeRoute = require('./youtube')
const playlistRoutes = require('./playlistRoutes');
const videoRoutes = require('./videoRoutes');

router.use('/user', userRoutes);
router.use('/playlist', playlistRoutes);
router.use('/video', videoRoutes);
router.use('/youtube', youtubeRoute);

module.exports = router;
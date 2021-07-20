const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tokenRoute = require('./token');
<<<<<<< HEAD
const youtubeRoute = require('./youtube')
=======
const playlistRoutes = require('./playlistRoutes');
>>>>>>> 21018f35bee35e639b6138f8b52f8c301ba72984

router.use('/user', userRoutes);
router.use('/playlist', playlistRoutes);
router.use('/user/token', tokenRoute);
router.use('/youtube', youtubeRoute);

module.exports = router;
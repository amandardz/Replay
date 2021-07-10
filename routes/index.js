const router = require('express').Router();
const userRoutes = require('./user');

router.use('/api', userRoutes);

module.exports = router; 
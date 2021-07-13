const router = require('express').Router();
const { User } = require('../models');

// router.get('/profile', async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password']},
//             include: [{ model: Group }]
//         });
//         const user = userData.get({ plain: true});

//     } catch (err) {
//         console.error(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;
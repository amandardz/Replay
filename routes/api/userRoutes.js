const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
  res.status(200).send(req.session.user_id)
});

router.get('/session', (req, res) => {
  if(req.session.logged_in) {
    res.status(200).send("200");
  } else {
    res.status(200).send("401");
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 8)
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json({ user: userData, message: "You are now signed up."});
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ username: req.body.username }).exec();

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username. Please try again!' });
      return;
    }

    const validPassword = await userData.comparePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in."});
    })

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
const router = require('express').Router();
const { Playlist, User } = require('../../models');

router.get('/', (req, res) => {
  User
    .findById(req.session.user_id)
    .populate('playlists')
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.post('/', async (req, res) => {
  try {
    const playlistData = await Playlist.create({
      name: req.body.name,
      description: req.body.description
    });

    const dbUser = await User.findOneAndUpdate({ _id: req.body.userId}, { $push: { playlists: playlistData._id } }, { new: true });

    res.status(200).json(dbUser);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const playlistData = await Playlist.findById(req.params.id).populate('videos');

    res.status(200).json(playlistData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id/editplaylist', async (req, res) => {
  try {
    const playlistData = await Playlist.findOneAndUpdate({ _id: req.params.id }, req.body);

    res.status(200).json(playlistData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const playlistData = await Playlist.findById(req.params.id);

    playlistData.remove();

    res.status(200).json({ playlistData, message: "Playlist deleted."});

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
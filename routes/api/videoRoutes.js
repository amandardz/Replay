const router = require('express').Router();
const { Video, Playlist } = require('../../models');

router.get('/', (req, res) => {
  Playlist
    .find(req.query)
    .populate("videos")
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

router.post('/', async (req, res) => {
  try {
    const videoData = await Video.create({
      title: req.body.title,
      channel: req.body.channel,
      linkId: req.body.linkId,
      description: req.body.description,
      thumbnail: req.body.thumbnail
    })

    const dbPlaylist = await Playlist.findOneAndUpdate({ _id: req.body.playlistId }, { $push: { videos: videoData._id } }, { new: true });

    res.status(200).json(dbPlaylist);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const videoData = await Video.findById(req.params.id);

    res.status(200).json({ Video: videoData });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const videoData = await Video.findById(req.params.id);

    videoData.remove();

    res.status(200).json({ videoData, message: "Video deleted."});

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const { Playlist } = require('../../models');

router.get('/', async (req, res) => {
    try {

    const playlists = await Playlist.find(req.query).sort({ date: -1 });

    res.status(200).json(playlists);
  
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
});

router.post('/', async (req, res) => {
  try {
    const playlistData = await Playlist.create(req.body);

    res.status(200).json({ Playlist: playlistData, message: "Playlist created."});

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    try {
      const playlistData = await Playlist.findById(req.params.id);
  
      res.status(200).json({ Playlist: playlistData });
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
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
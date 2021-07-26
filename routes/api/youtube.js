const router = require('express').Router();
const {google} = require('googleapis');

const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API
});

router.get('/', async(req, res) => {
  req.query.query

  const data = await youtube.search.list({part: 'id, snippet',q: req.query.query})

  res.json(data);
})

module.exports = router;

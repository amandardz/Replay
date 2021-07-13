const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();
const qs = require('qs');

router.get('/', async (req, res) => {
  console.log('HERE!!!', process.env.SPOTIFY_CLIENT_ID)

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
    res.status(200).json({success: true, data: response.data.access_token})
  } catch (error) {
    console.log(error);
  }
}
//   try{
//   const token = await axios ({
//           method: 'POST',
//           url: 'https://accounts.spotify.com/api/token',
//           data: 'grant_type=client_credentials',
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Authorization': 'Basic '+ Buffer.from(process.env.SPOTIFY_CLIENT_ID+':'+process.env.SPOTIFY_CLIENT_SECRET).toString('base64')
// }})
// res.status(200).json({success:true, result:token})
// }
//   catch(err) {
//     console.log(err)
//     res.status(400).end();
//   }

 )


module.exports = router;

// import axios from "axios";
// require('dotenv').config();

// export default {
//   getToken: function() {
//     return axios('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       data: 'grant_type=client_credentials',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic '+ btoa(process.env.SPOTIFY_CLIENT_ID+':'+process.env.SPOTIFY_CLIENT_SECRET)
//         // 'Authorization': 'Basic '+ btoa('94ada71ea84d4da7bc17bb5d06d5b255'+':'+'eb0134cd97544880b1ac9ba09da3537d')
//       }
//     });
//   }
// }
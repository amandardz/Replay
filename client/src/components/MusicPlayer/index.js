import React from 'react';
import YouTube from 'react-youtube';

class MusicPlayer extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '390',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        mute: 1
      },
    };

    return <YouTube videoId="8v_4O44sfjM" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    event.target.cueVideoById();
  }
}

export default MusicPlayer; 
import React from 'react';
import YouTube from 'react-youtube';

class MusicPlayer extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '390',
      playerVars: {
        autoplay: 1,
        mute: 1
      },
    };

    return <YouTube videoId="7EUVJaKJtBY" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    event.target.cueVideoById();
  }
}

export default MusicPlayer; 
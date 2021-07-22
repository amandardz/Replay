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
    console.log(this.props.videoLinks)
    return <YouTube videoId={this.props.videoLinks} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    event.target.cueVideoById();
  }
}

export default MusicPlayer; 
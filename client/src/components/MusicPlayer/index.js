import React from 'react';
import YouTube from 'react-youtube';

class MusicPlayer extends React.Component {
  state = {
    currentIndex: 0,
  }

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
    return <YouTube key={this.state.currentIndex} videoId={this.props.videoLinks[this.state.currentIndex]} opts={opts} onReady={this._onReady} onEnd={ () => {
      this.setState({currentIndex: this.state.currentIndex + 1})
    }
    } />;
  }
}

export default MusicPlayer; 
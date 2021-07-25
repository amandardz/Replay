import React from 'react';
import YouTube from 'react-youtube';

class MusicPlayer extends React.Component {
  state = {
    currentIndex: 0
  };

  handleNextBtn = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };

  handleBackBtn = () => {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  };

  render() {
    const opts = {
      height: '270',
      width: '480',
      playerVars: {
        autoplay: 1,
        mute: 1
      }
    };
    //console.log(this.props.videoLinks)
    return( 
      <>
      <YouTube  
        key={this.state.currentIndex} 
        videoId={this.props.videoLinks[this.state.currentIndex]} 
        opts={opts} 
        onEnd={ () => {this.setState({currentIndex: this.state.currentIndex + 1})}} 
      />
    <div>
    <button className="btn btn-danger" onClick={this.handleBackBtn}>
            back
          </button>
        <button className="btn btn-primary" onClick={this.handleNextBtn}>
            next
          </button>
    </div>
    </>
    )
  }
}

export default MusicPlayer; 
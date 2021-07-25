import React from 'react';
import YouTube from 'react-youtube';
import './style.css'

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
      height: '250',
      width: '95%',
      playerVars: {
        autoplay: 1,
        mute: 1
      }
    };
    //console.log(this.props.videoLinks)
    return( 
      <>
      <div className='media-container'>
      <YouTube 
        className='widget'
        key={this.state.currentIndex} 
        videoId={this.props.videoLinks[this.state.currentIndex]} 
        opts={opts} 
        onEnd={ () => {this.setState({currentIndex: this.state.currentIndex + 1})}} 
      />
      </div>
    <div className='media-btn-container'>
    <button className="media-btn btn btn-danger" onClick={this.handleBackBtn}>
            back
          </button>
        <button className=" ms-2 media-btn btn btn-primary" onClick={this.handleNextBtn}>
            next
          </button>
    </div>
    </>
    )
  }
}

export default MusicPlayer; 
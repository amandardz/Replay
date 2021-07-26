import React from "react";
import YouTube from "react-youtube";
import "./style.css";

class MusicPlayer extends React.Component {
  state = {
    currentIndex: 0,
  };

  handleNextBtn = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };

  handleBackBtn = () => {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  };

  render() {
    const opts = {
      height: "250",
      width: "95%",
      playerVars: {
        autoplay: 1,
        mute: 1,
      },
    };
    
    return (
      <>
        <div className="media-container">
          <YouTube
            className="widget"
            key={this.state.currentIndex}
            videoId={this.props.videoLinks[this.state.currentIndex]}
            opts={opts}
            onEnd={() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 });
            }}
          />
        </div>
        <div className="media-btn-container">
          <button className="p-1 back btn" onClick={this.handleBackBtn} >
            <i className="media-icon bi bi-arrow-left-square-fill"></i>
          </button>
          <button className="p-1 next ms-2 btn" onClick={this.handleNextBtn}>
            <i className="media-icon bi bi-arrow-right-square-fill"></i>
          </button>
        </div>
      </>
    );
  }
}

export default MusicPlayer;

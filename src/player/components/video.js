import React, { PureComponent } from 'react'
import './video.css'

class Video extends PureComponent {

  togglePlay = () => {
    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    } 
  }

  setRef = (element) => {
    this.video = element
  }

  render() {
    const {
      handleLoadedMetadata,
      handleOnTimeUpdate,
      handleOnSeeKing,
      handleOnSeeKed
    } = this.props
    
    return (
      <div className="Video">
        <video 
          ref={this.setRef}
          src={this.props.src}
          autoPlay={this.props.autoplay}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleOnTimeUpdate}
          onSeeking={handleOnSeeKing}
          onSeeked={handleOnSeeKed}
        />
      </div>
    )
  }
}
export default Video
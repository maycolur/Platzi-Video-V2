import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0
	}

	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause 
		})
	}

	componentDidMount() {
		this.setState({
			pause: (!this.props.autoplay)
		})
	}

	handleLoadedMetadata = (event) => {
		this.video = event.target
		this.setState({
			duration: this.video.duration
		})
	}

	handleTimeUpdate = (event) => {
		this.setState({
			currentTime: this.video.currentTime
		})
	}

	handleProgressChanges = (event) => {
		this.video.currentTime = event.target.value
	}
	
	render() {
		return (
			<VideoPlayerLayout>
				<Title 
					title="Este es el titulo"
				/>
				<Controls>
					<PlayPause
						pause={this.state.pause} 
						handleClick={this.togglePlay}
					/>
					<Timer
						currentTime={this.state.currentTime}
						duration={this.state.duration}
					/>
					<ProgressBar 
						max={this.state.duration}
						value={this.state.currentTime}
						handleChanges={this.handleProgressChanges}
					/>
				</Controls>
				<Spinner />
				<Video 
					autoplay={this.props.autoplay}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleOnTimeUpdate={this.handleTimeUpdate}
					pause={this.state.pause}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" 
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer


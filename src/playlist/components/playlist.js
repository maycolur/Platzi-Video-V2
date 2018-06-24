import React, { Component } from 'react'
import Media from './media'
import './media.css'

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    return (
      <div className="container">
        {
          playlist.map((media) => {
            return  <Media key={media.id} image={media.cover} title={media.title} author={media.author}/>
          })
        }
      </div>
    )
  }
}

export default Playlist
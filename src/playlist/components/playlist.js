import React from 'react'
import Media from './media'
import './media.css'
/*
  Este es un componente duncional y solo se encarga de rencerrizar ui, no posee estado y tampoco lo manejara
*/
function Playlist (props) {
    return (
      <div className="container">
        {
          props.playlist.map(media => {
            return  <Media
                      key={media.id}
                      {...media}
                      handleTogleModalClick={props.handleTogleModalClick}
                    />
          })
        }
      </div>
    )
}
export default Playlist
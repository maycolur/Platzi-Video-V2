import React from 'react'
import Playlist from '../../playlist/components/playlist'

function Category(props) {
    return (
        <div className="category">
            <p>{ props.description }</p>
            <h2>{ props.title }</h2>
            <Playlist
              playlist={ props.playlist }
              handleTogleModalClick={ props.handleTogleModalClick }
            />
        </div>
    )
}

export default Category
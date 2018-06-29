import React, { PureComponent } from 'react'
import './media.css'
import PropTypes from 'prop-types'
/*
  En react, valores de un componentes son inmutables, eso quiere decir que no cambian.
  para lograr cambiar el los valores de un componente, hay que cambiar su estado!!
*/
// Componente puro el cual tiene ya implementado el metodo componentShouldUpdate()
class Media extends PureComponent { 

  handleClick = (ev) => {
    console.log(this.props)
    console.log(ev.target)
  }
  render() {
    return(
      <div className="card" onClick={this.handleClick}>
        <img
          className="card-img-top"
          src={ this.props.cover }
          alt="card-image"
        />
        <div className="info-container">
          <h3 className="card-title">{ this.props.title }</h3>
          <p className="card-text">{ this.props.author }</p>
        </div>
      </div>
    )
  }
}
Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}
export default Media
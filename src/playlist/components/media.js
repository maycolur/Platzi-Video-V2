import React, { PureComponent } from 'react'
import './media.css'
import PropTypes from 'prop-types'
/*
  En react, valores de un componentes son inmutables, eso quiere decir que no cambian.
  para lograr que cambiar el los valores de un componente, hay que cambiar su estado!!
*/
class Media extends PureComponent {
  handleClick = (event) => {
    console.log(event.target)
    // Los componenetes en react tinene un metodo llamado setState con el cual se puede modicar el estado.
    this.setState({
      author: 'maycolur7'
    })
  }
  render() {
    return(
      <div className="card" onClick={this.handleClick}>
        <img
          className="card-img-top"
          src={ this.props.image }
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
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio'])
}
export default Media
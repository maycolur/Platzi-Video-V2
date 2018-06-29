import React from 'react'
import './modal.css'
function Modal (props) {
  return(
    <div className="Modal">
      <h3>Esto es un Modal</h3>
      { props.children }
      <button className="Modal-close" onClick={props.handleTogleModalClick}> </button>
    </div>
  )
}
export default Modal
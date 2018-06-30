import React from 'react'
import './modal.css'
function Modal (props) {
  return(
    <div className="Modal">
      <button className="Modal-close" onClick={props.handleTogleModalClick}> </button>
      { props.children }
    </div>
  )
}
export default Modal
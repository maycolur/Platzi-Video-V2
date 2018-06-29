import React from 'react'

function RegularError(props) {
  return(
    <div>
      <p>Upss!, ah ocurrido un error</p>
      <p>Error: { props.error }</p>
    </div>
  )
}
export default RegularError
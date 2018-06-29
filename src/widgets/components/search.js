import React from 'react'
import './search.css'

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      className="Search-input"
      type="text"
      placeholder="Busca tu video favorito"
      name="search"
      ref={props.setRef}
      onChange={props.handleChanges}
      value={props.value}
    />
  </form>
)

export default Search
import React, { Component } from 'react'
import Search from '../components/search'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value)
  }
  handleInputChanges = (event) => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }
  setRef = (element) => {
    this.input = element
  }
  render() {
    return(
      <Search
        handleSubmit={this.handleSubmit}
        setRef={this.setRef}
        handleChanges={this.handleInputChanges}
        value={this.state.value}
      />
    )
  }
}

export default SearchContainer
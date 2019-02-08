import React, { Component } from 'react'
import Search from '../components/search'
import { connect } from 'react-redux'

class SearchContainer extends Component {
  state = {
    value: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value
      }
    })
  }
  handleInputChanges = (event) => {
    this.setState({
      value: event.target.value
    })
    this.handleSubmit(event)
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

export default connect()(SearchContainer)
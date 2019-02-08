import React, { Component } from 'react'
import RegularError from '../components/regular-error'

class HandleError extends Component{
  state = {
    handleError: false,
    error:''
  }

  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
      error: error
    })
  }

  render() {
    if (this.state.handleError) {
      return(
        <RegularError
          error={ this.state.error.message }
        />
      )
    }
    return this.props.children
  }
}

export default HandleError
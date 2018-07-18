import React, { Component } from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    modalIsVisible: false
  }
  handleTogleModalClick = (event) => {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible
    })
  }
    render() {
      return(
        <HandleError>
          <HomeLayout> 
            <Related />
            <Categories
              handleTogleModalClick={ this.handleTogleModalClick }
              categories={ this.props.categories }
              search={ this.props.search }
            />
            {
              this.state.modalIsVisible &&
              <ModalContainer>
                <Modal handleTogleModalClick={ this.handleTogleModalClick }>
                  <VideoPlayer 
                    autoplay
                  />
                </Modal>
              </ModalContainer>  
            }
          </HomeLayout>
        </HandleError>
      )
    }
}

function mapStateToProps (state, props) {
  return {
    categories: state.data.categories,
    search: state.search
  }
}

export default connect(mapStateToProps)(Home)


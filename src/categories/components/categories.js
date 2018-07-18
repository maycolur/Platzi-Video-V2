import React from 'react'
import Category from './category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search'
import Media from '../../playlist/components/media'

function Categories(props) {
    return(
        <div className="categories">
          <SearchContainer />
            {
              props.search.length > 0 &&
                <h3>{props.search.length} videos encontrados</h3>
            }
            {
              props.search.map((item, index) => {
                return (
                  <Media handleTogleModalClick={props.handleTogleModalClick} key={index} {...item}/>
                )
              })
            }
            {
              props.categories.map(item => {
                return <Category
                  key={ item.id }
                  {...item }
                  handleTogleModalClick={ props.handleTogleModalClick }
                />
              })
            }
        </div>
    )
}

export default Categories
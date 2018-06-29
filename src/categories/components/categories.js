import React from 'react'
import Category from './category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search'

function Categories(props) {
    return(
        <div className="categories">
          <SearchContainer />
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
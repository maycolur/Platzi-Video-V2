import React from 'react'
import Category from './category'
import './categories.css'

function Categories(props) {
    return(
        <div className="categories">
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
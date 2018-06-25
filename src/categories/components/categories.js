import React from 'react'
import Category from './category'

function Categories(props) {
    return(
        <div className="categories">
            {
                props.categories.map(item => {
                    return <Category key={ item.id } {...item } />
                })
            }
        </div>
    )
}

export default Categories
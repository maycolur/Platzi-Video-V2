import React from 'react'
import './home-layout.css'
function HomeLayout(props) {
    return(
        <section className="homelayout">
            { props.children }
        </section>
    )
}

export default HomeLayout
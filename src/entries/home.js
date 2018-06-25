/*
    React como libreria esta dividida en 2 partes, React y ReactDOM, con la primera es con la
    que vamos a generar la aplicacion utilizando componentes y demas y la segunda se encarga 
    espesificamente de renderizar la aplicacion en el navegador.
*/
import React from 'react'
import ReactDOM from 'react-dom'
// componentes
// import Playlist from '../playlist/components/playlist'
import Home from '../pages/containers/home'
// data
import data from '../api.json'

const app = document.getElementById('app')
// el metodo render de react don recibe 2 parametros, que va a renderizar y donde lo va a renderizar!!
ReactDOM.render(<Home data={data} />, app)

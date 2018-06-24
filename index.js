/*
    React como libreria esta dividida en 2 partes, React y ReactDOM, con la primera es con la
    que vamos a generar la aplicacion utilizando componentes y demas y la segunda se encarga 
    espesificamente de renderizar la aplicacion en el navegador.
*/
import React from 'react'
import ReactDOM from 'react-dom'
// componentes
import Playlist from './src/playlist/components/playlist'
// data
import Data from './src/api.json'

const app = document.getElementById('app')
// el metodo render de react don recibe 2 parametros, que va a renderizar y donde lo va a renderizar!!
ReactDOM.render(<Playlist data={ Data } />, app)

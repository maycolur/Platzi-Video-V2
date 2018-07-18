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
// Redux
import { createStore } from 'redux'
const plugin = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
  data: {
    ...data
  }
}

const store = createStore(
  (state) => state,
  initialState,
  plugin
)

console.log(store.getState())

const homeContainer = document.getElementById('home-container')
// el metodo render de react don recibe 2 parametros, que va a renderizar y donde lo va a renderizar!!
ReactDOM.render(<Home data={data} />, homeContainer)

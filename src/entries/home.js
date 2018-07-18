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
// datas
import data from '../api.json'
// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/data'
const plugin = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/* estado inicial */
const initialState = {
  data: {
    ...data,
  },
  search: [],
}

/* store */
const store = createStore(
  reducer,
  initialState,
  plugin
)

/* root component */
const homeContainer = document.getElementById('home-container')
// el metodo render de react don recibe 2 parametros, que va a renderizar y donde lo va a renderizar!!
ReactDOM.render(
  <Provider store={store}>
   <Home />
  </Provider>,
  homeContainer)

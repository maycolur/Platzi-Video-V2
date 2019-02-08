import Category from "../categories/components/category";

/*
*  Reducer to manage the api
*/

function data (state, action) {
  console.log(state)
  let results = []
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      if (action.payload.query) {
        let videos = []
        for(let category of state.data.categories) {
          for(let i=0; i<category.playlist.length; i++) {
            videos.push(category.playlist[i])
          }
        }
        results = videos.filter(item => item.title.includes(action.payload.query))
        console.log(results)
      }
     return {
       ...state,
       search: results
     }
    }
    default:
      return state
  }
}

export default data
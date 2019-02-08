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
        let videoList = getVideosOfAllCategories(state.data.categories)
        results = videoList.filter(item => item.title.includes(action.payload.query))
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

function getVideosOfAllCategories(categories) {
  let videos = []
  for(let category of categories) {
    for(let i=0; i<category.playlist.length; i++) {
      videos.push(category.playlist[i])
    }
  }
  return videos
}

export default data
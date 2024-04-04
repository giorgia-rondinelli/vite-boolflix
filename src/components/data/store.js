

import { reactive } from 'vue'

export const store= reactive({
  apiUrlMovies: 'https://api.themoviedb.org/3/search/movie',
  apiUrlseries:'https://api.themoviedb.org/3/search/tv',
  params:{
    api_key:'32b08ab0028447c78aa0efa27c36fc47',
    query:'',
    



  },
  movieList:[],
  seriesList:[],
  vote:[]

  
})